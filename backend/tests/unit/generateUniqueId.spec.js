const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId()

        expect(id).toHaveLength(8)
    })
})

//o teste isolado testa um arquivo como esse: uma funcionalidade bem isolada
//ele não tem efeitos colaterais, não se comunica com outras ferramentas, como o banco de dados
//ou outras apis