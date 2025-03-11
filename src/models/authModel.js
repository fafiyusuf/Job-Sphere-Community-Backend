import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'],
        default: 'user ',
    },
});
export const User = mongoose.model('user', userSchema);
export default User;
