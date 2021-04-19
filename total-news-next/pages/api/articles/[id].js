import {articles} from '../../../data'

export default function handler({ query: {id} }, res) {
    const filtered = articles.filter(a => a.id === id)

    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `The article with the ${id} was not found`})
    }
}