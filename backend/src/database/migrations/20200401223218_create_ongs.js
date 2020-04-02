
exports.up = function(knex) {  //o método up é responsável pela criação da tabela
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
};

//se der algum problema e precisar voltar atrás da criação de uma tabela
exports.down = function(knex) {
    return knex.schema.dropTable('ongs')
};
