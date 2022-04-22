const { mongoModels: { memberModel }} = require('../../databases')

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
        res.send(`member ${name} ${lastName} has been created`);
    },
    /* getOne: (req, res) => {
        res.send('get one member');
    }, */
    updateOne: async (req, res) => {
        const { id } = req.params
        const { name, lastName, email, birthDate } = req.body
        await memberModel.findByIdAndUpdate(id,{ $set: { name, lastName, email, birthDate }})

        res.send(`member ${name} ${lastName} has been updated`);
    },
    deleteOne: async (req, res) => {
        const { id } = req.params
        await memberModel.findByIdAndDelete(id)
        res.send(`member has been deleted`);
    },
    assignAtendance: async (req, res) => {
        const { id } = req.params
        const { attendance } = req.body
        await memberModel.findByIdAndUpdate(id,{ $push: { attendances: attendance }})
        res.send(`member has been updated`);
    }
};