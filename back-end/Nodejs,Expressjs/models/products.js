//todo use mongoose
const mongoose = require('mongoose')

//* connect MongoDB

//? create / use MongoDB Database
const dburl = 'mongodb://127.0.0.1:27017/productDB';



mongoose.connect(dburl)
    .then(() => console.log('Connected to Database'))
    .catch(error => console.error('Database connect error:', error));


//?Schema
const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String
})

//?create Model 
const Product = mongoose.model("products", productSchema)

//?export model
module.exports = Product;


// *function record data

//saveProduct => ชื่อฟังชั้นที่ตั้งเอง
module.exports.saveProduct = (data) => {
    return new Product(data).save();

};