const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudioController')

//listar todos os estudios/get/find
router.get('/', controller.getAll)

//criar um novo estudio/post/save
router.post('/create', controller.createStudio)

//listar um estudio/get/findById
router.patch('/:id', controller.updateStudio)
//atualizar uma informacao especifica num estudio/patch/findById/save

//deletar um estudio/delete/findById/remove
router.delete('/:id', controller.deleteStudio)
module.exports = router