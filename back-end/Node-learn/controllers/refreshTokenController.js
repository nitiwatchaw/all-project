
const jwt = require('jsonwebtoken')
require('dotenv').config()

const usersDB = {
    users: require('../model/users.json'),
    setUser: function (data) { this.users = data }
}


const handleRefreshToken = (req, res) => {

    // Extracting cookies from the request
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(401)

    // Extracting the refresh token from cookies
    const refreshToken = cookies.jwt

    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken)
    if (!foundUser) return res.sendStatus(403); //Forbidden

    //evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const roles = Object.values(foundUser.roles);


            // If verification is successful, generate a new access token
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": decoded.username,
                        "roles": roles 
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' }
            )

            // Sending the new access token in the response
            res.json({ accessToken })
        }
    )


}

module.exports = {
    handleRefreshToken
}