const { mongoModels:{ userModel } } = require('../../databases')
const { bcryptHelper:{ hasherPassword } } = require('../../helpers')

module.exports = {
    getAll: async (req, res) => {
        const users = await userModel.find()
        res.json(users)
    },
    /* createOne: async (req, res) => {
        const { name, lastName, email, password } = req.body
        const encryptedPassword = await hasherPassword(password)
        const newUser = new userModel({ name, lastName, email, encryptedPassword })
        await newUser.save()
        res.send(`user ${name} ${lastName} has been created`)
    }, */
    signup: async (req, res) => {
        try {
            const { name, lastName, email, password } = req.body;
            console.log(req.body)
            const encryptedPassword = await hasherPassword(req.body.password);
            console.log(encryptedPassword)
            const newUser = new userModel({ name, lastName, email, password:encryptedPassword });
            console.log(newUser)
            await newUser.save();
            res.send(`user ${name} ${lastName} has been created`);
            
        } catch (error) {
            res.send(error);
        }
    },
    signin: (req, res) => {
        res.send('get one user');
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