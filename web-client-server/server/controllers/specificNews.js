import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Client } = require('@elastic/elasticsearch')

const client = new Client({
    cloud: {
        id: 'big-data-news-analysis:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJGExZjUxN2UxOWQzYzRiOWJhNjNkMjdlZTAyOWYxOGZhJDljNGUyNmEzMjAwZTQ2ZDQ4YjNhMGE4OTk4NzY4Yjkw'
    },
    auth: {
        username: 'elastic',
        password: '5gHGxn73bhwEAMzGY0f7USsy'
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
