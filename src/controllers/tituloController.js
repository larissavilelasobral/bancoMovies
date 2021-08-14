const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

const getAllPixar = async (req, res, next) => {
  
}
const getAll = async (req, res) => {
  const titulos = await Titulo.find().populate('estudios')
  res.status(200).json(titulos)
};

const createTitulo = async (req, res) => {
  const titulo = new Titulo({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    genero: req.body.genero,
    descricao: req.body.descricao,
    estudio: req.body.estudio,
    criadoEm: req.body.criadoEm
  })
  // validação se filme já existe
  const tituloJaExiste = await Titulo.findOne({nome: req.body.nome})
  if (tituloJaExiste) {
    return res.status(409).json({error: 'Titulo ja cadastrado.'})
  }
  try {
    const novoTitulo = await titulo.save()
    res.status(201).json(novoTitulo)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
};

// buscando titulo pelo nome

// const getTituloByName = (req, res) => {
//   const requestNome = req.params.nome
//   console.log(requestNome)
//   Titulo.find({nome: requestNome}, (err, tituloFound) => {
//     console.log("titulo encontrado pelo nome")
//     if (err) {
//       res.status(500).send({message: err.message})
//     } else {
//       if (tituloFound) {
//         res.status(200).send(tituloFound.toJSON())
//       } else {
//         res.status(204).send()
//       }
//     }
//   })
// };

// deletar um titulo pelo id

// const deleteTitulo = (req, res) => {
//   Titulo.findById(id, function (err, tituloFound) {
//     if (err) {
//       res.status(500).send({message: err.message})
//     } else {
//       if (tituloFound) {
//         // deletar apenas um registro
//         Titulo.deleteOne(id, function(err) {
//           if (err) {
//             res.status(500).send({
//               message: err.message,
//               status: "FAIL"
//             })
//           } else {
//             res.status(200).send({
//               message: "titulo removido com sucesso",
//               status: "SUCESSO"
//             })
//           }
//         })
//       } else {
//         res.status(404).send({message: "não ha titulo para ser deletado"})
//       }
//     }
//   })
// };

module.exports = {
  getAll,
  createTitulo,
}