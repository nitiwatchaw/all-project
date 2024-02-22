const jwt = require('jsonwebtoken')

exports.auth = async (req, res, next) => {
    try {

        //หน้าบ้านส่งtoken ชื่อ authtoken หรือไม่
        const token = req.headers["authtoken"]
        console.log('token headers', token)

        //ถ้าไม่
        if (!token) {
            return res.status(401).send('No token')
        }
 
        const decoded = jwt.verify(token, 'jwtsecret')
        console.log('decoded', decoded)

        req.user = decoded.user


        //เพื่อให้ได้ไปต่อ
        next()
    }
    catch (error) {
        console.log(error)
        res.send('Token Invalid').status(500)
    }
}