const { mongoModels:{ userModel } } = require('../../databases')

module.exports = {
    getAll: async (req, res) => {
        const users = await userModel.find()
        res.json(users)
    },
    createOne: async (req, res) => {
        const { name, lastName, email, password } = req.body
        const newUser = new userModel({ name, lastName, email, password })
        await newUser.save()
        res.send(`user ${name} ${lastName} has been created`)
    },
    /* getOne: (req, res) => {
        res.send('get one user');
    }, */
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