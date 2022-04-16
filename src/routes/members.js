const express = require('express')
const router = express.Router()

const { getAll, createOne, updateOne, getOne, deleteOne }    = require('../controllers/members')

router.get('/', getAll)

/* router.get('/:id', getOne) */

router.post('/', createOne)

router.put('/:id', updateOne)

router.delete('/:id', deleteOne)

module.exports = router