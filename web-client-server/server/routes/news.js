import express from 'express';
import { getNews, postNews } from '../controllers/news.js';
const router = express.Router();

//localhost:500/posts
router.get('/', getNews);
router.post('/', postNews);

export default router;