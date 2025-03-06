import express from 'express';
import { createJob, deleteJobs, getJob, getJobById, Updatejobs } from '../controllers/jobController.js';
import errorHandler from '../middleware/errorHandler.js';
import validateJob from '../middleware/validator.js';

const jobRouter = express.Router();

jobRouter.get('/', getJob);
jobRouter.get('/:id', getJobById);
jobRouter.post('/', validateJob, errorHandler, createJob);
jobRouter.put('/:id', Updatejobs);
jobRouter.delete('/:id', deleteJobs);

export default jobRouter;
