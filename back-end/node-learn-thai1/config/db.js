const mongoose = require('mongoose')

const connectDB = async (req, res) => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017')
        console.log('DB connected')
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = connectDB