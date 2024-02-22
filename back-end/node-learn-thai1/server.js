const express = require('express');
const path = require('path');
const app = express();
const { readdirSync } = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')

connectDB()
// Serve static files for the "/products" path
app.use('/products', express.static(path.join(__dirname, '/public')));

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }))

readdirSync('./routes')
    .map((path) => app.use('/', require('./routes/' + path)))


app.listen(5000, () => {
    console.log('Start server port 5000');
});