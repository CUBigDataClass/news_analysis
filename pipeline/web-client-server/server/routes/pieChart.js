import express from 'express';
import { getPieChartData }  from '../controllers/pieChart.js';
const router = express.Router();

//localhost:500
router.get("/", getPieChartData);

export default router;