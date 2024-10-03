/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('companies', function (table) {
    table.increments('company_id').primary()
    table.string('name').notNullable()
    table.string('description').notNullable()
    table.boolean('is_active').notNullable().defaultTo('true')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTableIfExists('companies')
}
