/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('contracts', function (table) {
    table.increments('contract_id').primary()
    table.integer('project_id').unsigned().references('projects.project_id')
    table.integer('user_id').unsigned().references('users.user_id')
    table.integer('working_hours').notNullable()
    table.integer('advanced_payment').notNullable()
    table.date('start_date').notNullable().defaultTo(knex.fn.now())
    table.date('end_date').notNullable().defaultTo(knex.raw('now() + interval \'1 month\''))
  })
}

/**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('contracts')
}
