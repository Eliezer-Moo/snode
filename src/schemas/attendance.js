const Joi = require('@hapi/joi')

const schema = Joi.object({
    date : Joi.date().required(),
    oCinco : Joi.boolean(),
    oNueve : Joi.boolean(),
    oSeis : Joi.boolean(),
    Consa : Joi.boolean(),
    sJueves : Joi.boolean(),
    dominical : Joi.boolean(),
    sDomingo : Joi.boolean()
})

module.exports =  schema 