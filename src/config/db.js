// import dotenv from 'dotenv';
// import mongoose from 'mongoose';

// dotenv.config();

// const connectAuthDb = () => {
//     const authDb = mongoose.createConnection(process.env.AUTH_DB_URI, {
    
//     });

//     authDb.on('connected', () => console.log('✅ Connected to Auth Database'));
//     authDb.on('error', (err) => console.error('❌ Auth Database Error:', err));

//     return authDb;
// };

// const connectjobDb = () => {
//     const jobDb = mongoose.createConnection(process.env.JOB_DB_URI, {
       
//     });

//     jobDb.on('connected', () => console.log('✅ Connected to Job Database'));
//     jobDb.on('error', (err) => console.error('❌ Job Database Error:', err));

//     return jobDb;
// };

// export { connectAuthDb, connectjobDb };
