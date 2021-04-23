import express from 'express'
import cors from 'cors';
const app = express();
import newsRoutes from './routes/news.js';

app.use(cors());
app.use('/all-news', newsRoutes);

const port = 5000;
app.listen(5000, () => {
    console.log(`App running on port ${port}`);
});


