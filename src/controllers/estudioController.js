const mongoose = require('mongoose')
const Estudio = require('../models/estudio')

const getAll = async (req, res) => {
  const estudios = await Estudio.find()
  try {
    res.status(201).json(estudios)
  }catch {
    res.status(500).json({message: 'estudios não encontrados tente novamente'})
  }
}

const createStudio = async (req, res) => {
  const estudio = new Estudio({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    criadoEm: req.body.criadoEm,
  })
// regra de negocio: não pode criar estudio com o mesmo nome.
  const estudioJaExiste = await Estudio.findOne({nome: req.body.nome})
  if (estudioJaExiste) {
    return res.status(409).json({error: 'Estudio ja cadastrado.'})
  }
  try{
    const novoEstudio = await estudio.save()
    res.status(201).json(novoEstudio)
  } catch(err) {
  res.status(400).json({message: err.message})
  }
}

const updateStudio =async (req,res) => {
  const estudioId = req.params.id
  let novoNome = req.body.nome
  
  Estudio.findByIdAndUpdate(
    estudioId, 
    {$set: {nome:novoNome}}, 
    function(err){
      if(err){
        res.status(500).json({message: err.message})
      }else{
        res.status(200).json()
      }
    } 
  )  
}

const nomeStudio = async (req, res) => {
  const nome = await Estudio.find({nome: req.body.estudio});
  try {
    res.status(201).json(nome)
  }catch {
    res.status(404).json({message: 'estudios não encontrados tente novamente'})
  }
}

const deleteStudio = async (req, res) => {
  const estudioId = req.params.id

  const estudioExiste = await Estudio.findById(estudioId)
  if(!estudioExiste) {
    res.status(404).json({message: "Estudio não existe!!"})
  } else {
    try{
      Estudio.deleteOne({id: estudioId}, function (err) {
        if (err) {
          res.status(400).json({message: err.message})
        } else {
          res.status(200).json({message: "estudio deletado com sucesso"})
        }
      })

    }
    catch (err) {
      res.status(400).json({message: err.message})
    }
  }
}

module.exports = {
  getAll,
  createStudio,
  updateStudio,
  deleteStudio,
  nomeStudio
}