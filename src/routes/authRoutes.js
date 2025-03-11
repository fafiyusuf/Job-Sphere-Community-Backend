import express from 'express';
import { login, protectedRoute, signUp } from '../controllers/authController.js';
import { protectAdmin } from '../middleware/adminValidator.js';
import { authenticate } from '../middleware/authenticate.js';
import errorHandler from '../middleware/errorHandler.js';
import { validateUser } from '../middleware/validator.js';

const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/register', validateUser, errorHandler, signUp);
authRouter.get('/protected', protectedRoute);
authRouter.get('/admin', protectAdmin,protectedRoute,authenticate);


export default authRouter;