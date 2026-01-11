/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("livros", (table) =>{
        table.increments()
        table.string("titulo", 80).notNullable();
        table.string("autor", 60).notNullable();
        table.string("ano", 4).notNullable();
        table.string("preco", 9.2).notNullable();
        table.string("foto", 100).notNullable();

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("livros")
};
