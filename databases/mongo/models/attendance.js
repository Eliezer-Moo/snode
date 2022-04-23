const mongoose = require('mongoose')
const Joi = require('@hapi/joi')
const boolean = require('@hapi/joi/lib/types/boolean')

const attendanceSchema = new mongoose.Schema({
    date: {
        type: Date
    },
    oCinco: {
        type: boolean
    },
    oNueve: {
        type: boolean
    },
    oSeis: {
        type: boolean
    },
    Consa: {
        type: boolean
    },
    sJueves: {
        type: boolean
    },
    dominical: {
        type: boolean
    },
    sDomingo: {
        type: boolean
    }
})

attendanceSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Attendance', attendanceSchema)