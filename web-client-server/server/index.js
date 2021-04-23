import express from 'express'
import cors from 'cors';
const app = express();
import newsRoutes from './routes/news.js';

app.use(cors());
app.use('/', newsRoutes);

const port = 3000;
app.listen(3000, () => {
    console.log(`App running on port ${port}`);
});


