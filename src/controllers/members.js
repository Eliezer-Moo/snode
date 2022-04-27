const { mongoModels: { memberModel }} = require('../../databases')

module.exports = {
    getAll: async (req, res) => {
        const members = await memberModel.find({},{__v:0}).populate('attendances');
        res.json(members);
    },
    getbyname: async (req, res) => {
        const { name } = req.params;
        const memberfind = await memberModel.find({ name});
        res.json(memberfind);
    },
    createOne: async (req, res) => {
        const { name, lastName, email, birthDate, status } = req.body;
        const newMember = new memberModel({ name, lastName, email, birthDate, status, createdBy: req.userData._id });
        await newMember.save();
        res.send(`member ${name} ${lastName} has been created`);
    },
    getOne: (req, res) => {
        const { id } = req.params
        memberModel.findById(id).populate('attendances').exec((err, member) => {
            if (err) {
                res.send(err)
            }
            res.json(member)
        })
    },
    updateOne: async (req, res) => {
        console.log(req.userData)
        const { id } = req.params
        const { name, lastName, email, birthDate,status } = req.body
        await memberModel.findByIdAndUpdate(id,{ $set: { name, lastName, email, birthDate, status, updatedBy: req.userData._id }})

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
        const addAtendance  = await memberModel.findByIdAndUpdate(id,{ $push: { attendances: attendance }})
        res.send(`${addAtendance.name} ${addAtendance.lastName} has been added to attendances`);
    }
};