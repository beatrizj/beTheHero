
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments()  //primary key que se auto incrementa
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()

        table.string('ong_id').notNullable() //verificar qual ong criou o incidente
        table.foreign('ong_id').references('id').inTable('ongs')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
};