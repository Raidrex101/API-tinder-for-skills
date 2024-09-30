/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('personal_skills', function (table) {
    table.increments('personal_skills_id').primary()
    table.integer('user_id').unsigned().references('users.user_id')
    table.integer('skill_id').unsigned().references('skills.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('personal_skills')
}
