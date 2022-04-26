const jwt = require('jsonwebtoken')
const { mongoModels:{ userModel } } = require('../../databases')
const { bcryptHelper:{ hasherPassword, comparePassword } } = require('../../helpers')
const{ jwtSecret } = require('../../config')

module.exports = {
    getAll: async (req, res) => {
        const users = await userModel.find()
        res.json(users)
    },
    signup: async (req, res) => {
        try {
            const { name, lastName, email, password } = req.body;
            const encryptedPassword = await hasherPassword(req.body.password);
            const newUser = new userModel({ name, lastName, email, password:encryptedPassword });
            await newUser.save();
            res.send(`user ${name} ${lastName} has been created`);
            
        } catch (error) {
            res.send(error.message);
        }
    },
    signin: async (req, res) => {
        const {name, lastName, email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) return res.status(404).send('User not found');
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) return res.status(401).send('email or Password invalid');
        const token = jwt.sign(JSON.stringify(user), jwtSecret);
        //console.log(token);
        res.json({ message: `${name} ${lastName} welcome` ,token });

    },
    updateOne: async (req, res) => {
        const { id } = req.params
        const { name, lastName, email, password } = req.body
        await userModel.findByIdAndUpdate(id,{ $set: { name, lastName, email, password }})

        res.send(`user ${name} ${lastName} has been updated`);
    },
    deleteOne: async (req, res) => {
        const { id } = req.params
        await userModel.findByIdAndDelete(id)
        res.send(`user has been deleted`);
    }
};