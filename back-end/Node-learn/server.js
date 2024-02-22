const exp = require('constants');
const express = require('express')
const app = express();
const path = require('path')
const cors = require('cors')
const coreOptions = require('./config/corOptions')
const errorHandler = require('./middleware/errorHandler')
const verifyJWT = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser')
const credentials = require('./middleware/credentials')

//middleware 
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//middleware for cookies
app.use(cookieParser())

//handle options creadential check - before CORS
app.use(credentials)

//Cross Origin Resource Sharing 
app.use(cors(coreOptions))


//server static files
app.use('/', express.static(path.join(__dirname, '/public')))





//route
app.use('/', require('./routes/root'))
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/refresh', require('./routes/refresh'))
app.use('/logout', require('./routes/logout'))

app.use(verifyJWT)
app.use('/employees', require('./routes/api/employees'))

app.all('*', (req, res) => {
    res.status(404);

    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }
    else if (req.accepts('json')) {
        res.json({ error: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
});


app.use(errorHandler)


const PORT = process.env.PORT || 3500
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))







