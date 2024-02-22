const Product = require('../models/Product')

exports.list = async (req, res) => {
    try {
        const producted = await Product.find().exec()
        res.send(producted)

    }
    catch (error) {
        console.log(error)
        res.status(500).send('Server Erorr')
    }
}

exports.read = async (req, res) => {
    try {
        const producted = await Product.findById(req.params.id)

        res.send(producted)

    }
    catch (error) {
        console.log(error)
        res.status(500).send('Server Erorr')
    }
}


exports.create = async (req, res) => {
    try {
        console.log(req.body)
        const producted = await Product(req.body).save()

        res.send(producted)

    }
    catch (error) {
        console.log(error)
        res.status(500).send('Server Erorr')
    }
}


exports.put = async (req, res) => {
    try {
        const id = req.params.id

        const producted = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true }).exec()

        res.send(producted)

    }
    catch (error) {
        console.log(error)
        res.status(500).send('Server Erorr')
    }
}

exports.remove = async (req, res) => {
    try {
        const id = req.params.id

        const producted = await Product.findOneAndDelete({ _id: id }).exec()

        res.send(producted)

    }
    catch (error) {
        console.log(error)
        res.status(500).send('Server Erorr')
    }
}