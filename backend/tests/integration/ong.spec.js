const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback() //desfaz a ong criada para caso o teste seja executado novamente
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy() //desfaz a conexão do teste com o banco de dados
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAD2",
            email: "apad@apad.com.br",
            whatsapp: "24999651570",
            city: "Cidade",
            uf: "rj"
        })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})

//para o teste de integração é necessário criar 
//um banco de dados para testes