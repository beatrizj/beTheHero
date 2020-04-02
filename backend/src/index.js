const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json()) //para utilizar json nas rotas
app.use(routes)

//Tipos de parâmetros:
//Query Params (req.query) = parâmetros enviados na rota após "?"
//Route Params (req.params) = parâmetros utilizados para identificar recursos
//Request Body (req.body) = corpo da requisição

//Driver: SELECT * FROM users
//Query Builder: table('users').select('*').where()

app.listen(3333)
