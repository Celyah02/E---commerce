const express = require('express');
// const connectDB = require('./config/db');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');
const swaggerSetup = require('./swagger');

require('dotenv').config();



mongoose.connect("mongodb://localhost:27017/dbconnected").then(()=>{
    console.log("mongosse are connected")
})

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
swaggerSetup(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});