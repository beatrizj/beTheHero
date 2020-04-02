const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const { title, description, value } = req.body
        const ong_id = req.headers.authorization

        //o primeiro valor do response é armazenado numa variável id
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        return res.json({ id })
    },

    async index(req, res) {
        const { page = 1 } = req.query //se o page não existir, usa o valor 1

        const [count] = await connection('incidents').count()

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5) //limita a 5 incidentes
            .offset((page - 1) * 5)
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])
        
        res.header('X-Total-Count', count['count(*)'])

        return res.json(incidents)
    },

    async delete(req, res) {
        const { id } = req.params
        const ong_id = req.headers.authorization

        const incident = await connection('incidents').where('id', id).select('ong_id').first()

        if (incident.ong_id != ong_id) {
            return res.status(401).json({ error: "Operation not permited"}) //erro 401 - não tem autorização
        }

        await connection('incidents').where('id', id).delete()

        return res.status(204).send() //erro 204 - no content (a resposta teve sucesso mas não tem conteúdo para retornar)
    }
}