import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/test', async (req, res) => {
    try {
        // Check if MongoDB is connected
        if (mongoose.connection.readyState === 1) {
            res.send('MongoDB is connected!');
        } else {
            res.status(500).send('MongoDB is not connected.');
        }
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

export default router;
