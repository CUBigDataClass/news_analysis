import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Client } = require('@elastic/elasticsearch')

const client = new Client({
    cloud: {
        id: ''
    },
    auth: {
        username: 'elastic',
        password: ''
    }
})
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('');

export const postNews = async (req, res) => {
    try {
        await client.indices.create({
            index: 'news',
            body: {
                mappings: {
                    properties: {
                        source: {
                            id: {
                                type: 'keyword',
                                "null_value": "NULL"
                            },
                            name: {type: 'text'}
                        },
                        author: {type: 'text'},
                        title: {type: 'text'},
                        description: {type: 'text'},
                        url: {type: 'url.full.text'},
                        urlToImage: {type: 'url.full.text'},
                        publishedAt: {type: "date"},
                        content: {type: 'text'}
                    }
                }
            }
        }, {ignore: [400]})

        newsapi.v2.topHeadlines({
            category: 'business',
            language: 'en',
            country: 'us'
        }).then(async response => {
            const dataset = response.articles
            const body = dataset.flatMap(doc => [{index: {_index: 'news'}}, doc])
            const { body: bulkResponse } = await client.bulk({ refresh: true, body })
        });
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const getNews = async (req, res) => {
    try {
        const { body } = await client.search({
            index: 'news'
        })
        res.status(200).json(body.hits.hits);
    } catch (error) {
        res.status(404).json({message: error.message});
    }

}
