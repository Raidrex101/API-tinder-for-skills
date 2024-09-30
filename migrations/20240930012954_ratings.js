/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('ratings', function (table) {
    table.increments('rating_id').primary()
    table.integer('user_id').unsigned().references('contracts.contract_id')
    table.decimal('rating', 3, 1)
    table.string('comment').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('ratings')
}
