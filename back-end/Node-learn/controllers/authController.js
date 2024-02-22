const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const fsPromises = require('fs').promises
const path = require('path')

const usersDB = {
    users: require('../model/users.json'),
    setUser: function (data) { this.users = data }
}




const handleLogin = async (req, res) => {
    const { user, pwd } = req.body
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.!' })

    const foundUser = usersDB.users.find(person => person.username === user)
    if (!foundUser) return res.sendStatus(401); //Unauthorized

    //evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password)
    if (match) {
        const roles = Object.values(foundUser.roles)
        // Generating JWTs (Access Token and Refresh Token)
        const accessToken = jwt.sign(
            {
                "UserInfo": { //payload
                    "username": foundUser.username,
                    "roles": roles
                },
            },
            process.env.ACCESS_TOKEN_SECRET,  //secret
            { expiresIn: '30s' } //expires
        )
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        )

        // Updating the user's refresh token in the database
        const otherUser = usersDB.users.filter(person => person.username !== foundUser.username)
        const currentUser = { ...foundUser, refreshToken }
        usersDB.setUser([...otherUser, currentUser])

        // Writing the updated users database to the JSON file
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        )

        // Setting the Refresh Token as an HTTP-only cookie and responding with the Access Token
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }) //ป้องกันจากการhack โดยเก็บไว้ใน cookie as httpOnly
        res.json({ accessToken })// ไม่สามารถป้องกัน jwt ได้เลยอยู่ได้แปปเดียว

    } else {
        res.sendStatus(401);
    }

}

module.exports = {
    handleLogin
}