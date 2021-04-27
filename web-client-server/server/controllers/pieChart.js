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


export const getPieChartData = async (req, res) => {
    try {
        let count = {}
        // const { body } = await client.search({
        //     index: 'test',
        //     body: {
        //         query: {
        //             match: {
        //                 sentiment:'positive'
        //             }
        //         }
        //     }
        //
        // })
        const { body } = await client.sql.query({
            body: {
                query: "SELECT * FROM 'test'"
            }
        })
        console.log(body)
        // count.negative = body.hits.total.value
        res.status(200).json(count);
    } catch (error) {
        res.status(404).json({message: error.message});
    }

}
