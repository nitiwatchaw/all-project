const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: String,
    body: {
        require: true,
        type: String,
    },
    footer: {
        type: String
    }
}, { timestamps: true })


module.exports = mongoose.model('Posts', postSchema)