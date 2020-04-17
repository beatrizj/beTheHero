const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json()) //para utilizar json nas rotas
app.use(routes)
app.use(errors())

//Tipos de parâmetros:
//Query Params (req.query) = parâmetros enviados na rota após "?"
//Route Params (req.params) = parâmetros utilizados para identificar recursos
//Request Body (req.body) = corpo da requisição

//Driver: SELECT * FROM users
//Query Builder: table('users').select('*').where()

module.exports = app
