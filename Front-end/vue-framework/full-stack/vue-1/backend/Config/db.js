const mongoose = require('mongoose')

const url = 'mongodb+srv://nitiwatcmu:1234@cluster0.iddwr55.mongodb.net/mydatabase?retryWrites=true&w=majority'; // Added database name

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB connection error:');
    }
};

module.exports = connectDB
