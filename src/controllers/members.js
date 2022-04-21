const { mongoModels: {
    memberModel
}} = require('../../databases')

module.exports = {
    getAll: async (req, res) => {
        const members = await memberModel.find();
        res.json(members);
        //res.send('get all members');
    },
    createOne: async (req, res) => {
        const { name, lastName, email, birthDate } = req.body;
        const newMember = new memberModel({ name, lastName, email, birthDate });
        await newMember.save();
        res.send('create one member');
    },
    /* getOne: (req, res) => {
        res.send('get one member');
    }, */
    updateOne: (req, res) => {
        res.send('update one member');
    },
    deleteOne: (req, res) => {
        res.send('delete one member');
    }
};