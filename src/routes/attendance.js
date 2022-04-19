const express = require('express')
const router = express.Router()
const attendanceSchema = require('../schemas/attendance')
const validate = require('../middlewares/validateData')

const { getAll, createOne, updateOne, getOne, deleteOne }    = require('../controllers/attendance')

router.get('/', getAll)

/* router.get('/:id', getOne) */

router.post('/', validate(attendanceSchema) , createOne)

router.put('/:id', validate(attendanceSchema) , updateOne)

router.delete('/:id', deleteOne)

module.exports = router