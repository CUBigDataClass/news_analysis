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

export const getNews = async (req, res) => {
    try {
        const { body } = await client.search({
            index: 'news',
            body: {
                query: {match: {_id: req.query.id}}
            }
        })
        res.status(200).json(body.hits.hits);
    } catch (error) {
        res.status(404).json({message: error.message});
    }

}
