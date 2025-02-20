import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config();
import express from 'express'
import cors from 'cors';
import allNewsRoutes from './routes/allNews.js';
import specificNews from "./routes/specificNews.js";
import tweets from "./routes/tweets.js";
import pieChart from "./routes/pieChart.js";

const app = express();
app.use(cors());
app.use('/all-news', allNewsRoutes);
app.use('/specific-news', specificNews);
app.use('/tweets', tweets);
app.use('/pie-chart', pieChart);

const port = 5000;
app.listen(5000, () => {
    console.log(`App running on port ${port}`);
});


