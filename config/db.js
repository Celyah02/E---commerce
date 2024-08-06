const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://furahacelia33:wtYqBM0z9mrGaCdf@cluster0.qlizo4a.mongodb.net/E-commerce?retryWrites=true&w=majority');
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
