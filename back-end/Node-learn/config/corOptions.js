
const allowedOorigins = require('./allowedOrigins')
const coreOptions = {
    origin: (origin, callback) => {
        if (allowedOorigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}


module.exports = coreOptions