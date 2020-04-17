const knex = require('knex')
const configuration = require('../../knexfile')

//para utilizar o ambiente de teste
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development

const connection = knex(config)

module.exports = connection