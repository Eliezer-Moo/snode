const express = require('express')
const router = express.Router()
const usersSchema = require('../schemas/users')
const validate = require('../middlewares/validateData')

const { getAll, createOne, updateOne, getOne, deleteOne }    = require('../controllers/users')

router.get('/', getAll)

/* router.get('/:id', getOne) */

router.post('/', validate(usersSchema), createOne)

router.put('/:id', validate(usersSchema), updateOne)

router.delete('/:id', deleteOne)

module.exports = router