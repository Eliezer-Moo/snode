const mongoose = require('mongoose')
const {Schema} = mongoose

const membersSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    birthDate: { type: Date, required: true },
})

const Members = mongoose.model('Members', membersSchema)
module.exports = Members