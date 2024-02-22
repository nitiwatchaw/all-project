
const express = require('express');
const app = express();
const connectDB = require('./Config/db')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.PORT || 8000;
const posts = require('./routes/api/post')

app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }))

app.use('/api/posts', posts)


// Call connectDB to establish the connection
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});



