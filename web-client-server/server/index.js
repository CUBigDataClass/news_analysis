import express from 'express'
import cors from 'cors';
const app = express();
import allNewsRoutes from './routes/allNews.js';
import specificNews from "./routes/specificNews.js";
import tweets from "./routes/tweets.js";

app.use(cors());
app.use('/all-news', allNewsRoutes);
app.use('/specific-news', specificNews);
app.use('/tweets', tweets);

const port = 5000;
app.listen(5000, () => {
    console.log(`App running on port ${port}`);
});


