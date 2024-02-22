

const verifyRoles = (...alllowedRoles) => {

    return (req, res, next) => {
        if (!req?.role) return res.sendStatus(401)
        const rolesArray = [...alllowedRoles]
        console.log(rolesArray)
        console.log(req.roles)
        const result = req.roles.map(role => rolesArray.included(role)).find(val => val === true)
        if (!result) return res.sendStatus(401)
        next()
    }

}


module.exports = verifyRoles