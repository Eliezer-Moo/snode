const Joi = require('@hapi/joi')

const schema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    paswword: Joi.string().required()
})

module.exports = schema 
