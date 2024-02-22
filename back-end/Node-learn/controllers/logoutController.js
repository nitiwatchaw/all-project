const fsPromiese = require('fs').promises
const path = require('path')

const usersDB = {
    users: require('../model/users.json'),
    setUser: function (data) { this.users = data }
}


const handleLogout = async (req, res) => {
    //on client also delete the accessToken

    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204) //Noe content
    const refreshToken = cookies.jwt

    // Checking if the refresh token is in the database
    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken)
    if (!foundUser) {
        // If the refresh token is not in the database, clear the cookie and send No Content
        res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
        return res.sendStatus(204)
    }

    // Deleting the refresh token in the database
    const otherUsers = usersDB.users.filter(person => person.refreshToken !== foundUser.refreshToken)
    const currentUser = { ...foundUser, refreshToken: '' }
    usersDB.setUser([...otherUsers, currentUser])


    // Writing the updated users database to the JSON file
    await fsPromiese.writeFile(
        path.join(__dirname, '..', 'model', 'users.json'),
        JSON.stringify(usersDB.users)
    )

    // Clearing the 'jwt' cookie and sending No Content
    res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }) // secure: true - only serves on https
    res.sendStatus(204)

}

module.exports = {
    handleLogout
}