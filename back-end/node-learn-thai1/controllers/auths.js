const auth = require('../models/auth')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {


    try {
        // check user
        const existingUser = await auth.findOne({ name: req.body.name });

        if (existingUser) {
            return res.status(400).json({ error: 'User with this name already exists' });
        }
        //Encrypt
        const salt = await bcrypt.genSalt(10)


        user = new auth({
            name: req.body.name,
            password: req.body.password
        })
        console.log('Password:', req.body.password);
        console.log('Salt:', salt);

        user.password = await bcrypt.hash(req.body.password, salt);

        // save
        const register = await user.save()

        res.send(register)

    }
    catch (error) {
        console.log(error)
    }
}

exports.login = async (req, res) => {
    try {
        // check user
        const { name, password } = req.body
        var user = await auth.findOneAndUpdate({ name }, { new: true })
        console.log(user)

        //check password match
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).send("Password is invalid")
            }

            //payload (ข้อมูลของ user)
            var payload = {
                name: user.name
            }
            //generate token
            jwt.sign(payload, 'jwtsecret', { expiresIn: 10 }, (err, token) => {
                if (err) throw err;
                res.json({ token, payload })
            })
        } else {
            return res.status(400).send('User not founded!!')
        }

    }
    catch (error) {
        console.log(error)
    }
}