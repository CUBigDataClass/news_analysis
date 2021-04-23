import express from 'express';
import { getNews }  from '../controllers/specificNews.js';
const router = express.Router();

//localhost:500/posts
router.get("/", getNews);

export default router;