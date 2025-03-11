import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectdb from './config/database.js';
import logger from './middleware/logger.js';
import authRouter from './routes/authRoutes.js';
import jobRouter from './routes/jobs.js';
import testRouter from './routes/test.js';

dotenv.config();
connectdb();


const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);
app.use('/api/jobs',jobRouter);
app.use('/api/test',testRouter);
app.use('/api',authRouter);
app.use('/api/login',authRouter);
app.use('/api/protected',authRouter);
app.use('/api/admin',authRouter);

export default app;