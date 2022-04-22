const { mongoModels:{ attendanceModel } } = require('../../databases');

module.exports = {
    getAll: async (req, res) => {
        const attendances = await attendanceModel.find()
        res.json(attendances)
    },
    createOne: async (req, res) => {
        const { date, oCinco, oNueve, oSeis, Consa, sJueves, dominical, sDomingo, member } = req.body
        const newAttendance = new attendanceModel({ date, oCinco, oNueve, oSeis, Consa, sJueves, dominical, sDomingo, member })
        await newAttendance.save()
        res.send(`attendance has been created`);
    },
    /* getOne: (req, res) => {
        res.send('get one attendance');
    }, */
    updateOne: async (req, res) => {
        const { id } = req.params
        const { date, oCinco, oNueve, oSeis, Consa, sJueves, dominical, sDomingo, member } = req.body
        await attendanceModel.findByIdAndUpdate(id,{ $set: { date, oCinco, oNueve, oSeis, Consa, sJueves, dominical, sDomingo, member }})

        res.send(`attendance has been updated`);
    },
    deleteOne: async (req, res) => {
        const { id } = req.params
        await attendanceModel.findByIdAndDelete(id)
        res.send('delete one attendance');
    }
};