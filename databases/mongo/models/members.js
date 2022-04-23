const mongoose = require('mongoose')
const {Schema} = mongoose

const membersSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique:true, required: true },
    birthDate: { type: Date, required: true },
    attendances: [{ type: Schema.Types.ObjectId, ref: 'Attendance', autopopulate: true }]
})

membersSchema.plugin(require('mongoose-autopopulate'))

const Members = mongoose.model('Members', membersSchema)
module.exports = Members