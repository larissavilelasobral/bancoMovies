const express = require('express');
const app = express()

const db = require('./src/data/database');
db.connect()

app.use(express.json())

const estudiosRouter = require('./src/routes/estudios.routes')
app.use('/estudios', estudiosRouter)

const titulosRouter = require('./src/routes/titulos.routes')
app.use('/titulos', titulosRouter)

const port = 8080
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))