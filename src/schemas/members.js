const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  birthDate: Joi.date().required(),
  status: Joi.boolean().required(),
});

module.exports =  schema 
