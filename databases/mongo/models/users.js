const mongoose = require('mongoose')
const {Schema} = mongoose

const usersSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true,required: true },
    password: { type: String, required: true },
}, {timestamps: true})

usersSchema.plugin(require('mongoose-autopopulate'))

const Users = mongoose.model('Users', usersSchema)
module.exports = Users
