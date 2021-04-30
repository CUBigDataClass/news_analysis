import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Client } = require('@elastic/elasticsearch')
require('dotenv').config();

const client = new Client({
    cloud: {
        id: process.env.ELASTICSEARCH_CLOUD_ID
    },
    auth: {
        username: 'elastic',
        password: process.env.ELASTICSEARCH_PASSWORD
    }
})


export const getTweets = async (req, res) => {
    try {
        const { body } = await client.search({
            index: 'tweets',
            body: {
                query: {match: {news_id: req.query.id}}
            }
        })
        res.status(200).json(body.hits.hits);
    } catch (error) {
        res.status(404).json({message: error.message});
    }

}
