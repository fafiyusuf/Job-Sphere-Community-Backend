import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import logger from './middleware/logger.js';
import jobRouter from './routes/jobs.js';
import testRouter from './routes/test.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);
app.use('/api/jobs',jobRouter);
app.use('/api/test',testRouter);

export default app;