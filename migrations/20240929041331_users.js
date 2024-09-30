/**
 * @param { import("knex").Knex } knex // knex migrate:make nombre de la migracion
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('users').then(function (exists) { // knex migrate:latest para ejecutar las migraciones
    if (!exists) {
      return knex.schema.createTable('users', function (table) {
        table.increments('user_id').primary()
        table.string('first_name').notNullable()
        table.string('last_name').notNullable()
        table.string('email').notNullable()
        table.string('phone').notNullable()
        table.string('is_active').notNullable().defaultTo('true')
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('users').then(function (exists) { // knex migrate:rollback latest, --all, 20240929041331_users.js la ultima para una en especifico
    if (exists) {
      return knex.schema.dropTable('users')
    }
  })
}
