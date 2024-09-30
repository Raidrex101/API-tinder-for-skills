/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('projects', function (table) {
    table.increments('project_id').primary()
    table.string('description').notNullable()
    table.string('status').notNullable().defaultTo('open')
    table.integer('company_id').unsigned().references('companies.company_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('projects')
}
