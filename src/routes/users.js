const express = require('express')
const router = express.Router()
const usersSchema = require('../schemas/users')
const validate = require('../middlewares/validateData')

const { getAll, createOne, updateOne, getOne, deleteOne, signup, signin }    = require('../controllers/users')

router.get('/', getAll)

/* router.get('/:id', getOne) */

router.post('/', validate(usersSchema), createOne)
router.post('/signup', validate(usersSchema), signup)
router.post('/signin', validate(usersSchema), signin)

router.put('/:id', validate(usersSchema), updateOne)

router.delete('/:id', deleteOne)

module.exports = router