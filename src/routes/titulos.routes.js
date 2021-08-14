const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloController')


// listar todos os titulos/get/find
router.get('/', controller.getAll)

// criar um novo titulo/post/save
router.post('/', controller.createTitulo)

// buscar titulos pelo nome
// router.get('/nome', controller.getTituloByName)

//listar um titulo/get/findById

//atualizar uma informacao especifica num titulo/patch/findById/save

//deletar um titulo/delete/findById/remove
// router.delete('/id', controller.deleteTitulo)

module.exports = router