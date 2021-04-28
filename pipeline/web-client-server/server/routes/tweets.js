import express from 'express';
import { getTweets }  from '../controllers/tweets.js';
const router = express.Router();

//localhost:500
router.get("/", getTweets);

export default router;