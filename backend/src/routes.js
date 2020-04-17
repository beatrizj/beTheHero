const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate') //para fazer validações

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router() //pegando o módulo de rotas do express

routes.post('/session', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({ //validando o body
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create)

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({ //validando o header
        authorization: Joi.string().required()
    }).unknown() //toda requisição envia vários headers. o unknown descarta as propriedades que não estão sendo validadas dentro do object
}), ProfileController.index)

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete)

module.exports = routes