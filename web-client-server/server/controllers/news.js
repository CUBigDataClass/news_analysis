import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Client } = require('@elastic/elasticsearch')

const client = new Client({
    cloud: {
        id: 'i-o-optimized-deployment:dXMtd2VzdDEuZ2NwLmNsb3VkLmVzLmlvJGM5ZGJhMWM2MDFkYTRhODRiZDE4NDMxM2YwOGQ1MDJjJDcwMDkyNWJjYTgxZDQzMjU4MTZmZDM4Yjc3OWUwOTNi'
    },
    auth: {
        username: 'elastic',
        password: '56IaBb2HCuwdIEkRlzr9aU2P'
    }
})
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('c7a35ea574f94546bfb18bd32950dafc');

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
            q: 'bitcoin',
            category: 'business',
            language: 'en',
            country: 'us'
        }).then(async response => {
            const dataset = response.articles
            const body = dataset.flatMap(doc => [{index: {_index: 'news'}}, doc])
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