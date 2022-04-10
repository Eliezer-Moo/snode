const express = require('express')

const router = express.Router()
const attendanceSchema = require('../models/attendance')

router.post('attendance', (req, res) => {
    const attendance = new attendanceSchema({
        date: req.body.date,
        oCinco: req.body.oCinco,
        oNueve: req.body.oNueve,
        oSeis: req.body.oSeis,
        Consa: req.body.Consa,
        sJueves: req.body.sJueves,
        dominical: req.body.dominical,
        sDomingo: req.body.sDomingo,
        memberID: req.body.memberID
    })
    attendance.save()
        .then(() => res.send('attendance saved'))
        .catch(err => res.send(err))
})

module.exports = router