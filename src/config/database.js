import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.ATLAS_URI, {
            
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}
export default connectdb;