const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudioController')

router.get('/', controller.getAll)

router.post('/create', controller.createStudio)

router.patch('/:id', controller.updateStudio)

router.delete('/:id', controller.deleteStudio)

router.get('/estudio', controller.nomeStudio)

module.exports = router