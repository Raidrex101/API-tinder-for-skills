/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('person_skills').insert([
    { user_id: 1, skill_id: 2 },
    { user_id: 2, skill_id: 3 },
    { user_id: 3, skill_id: 1 },
    { user_id: 4, skill_id: 4 },
    { user_id: 5, skill_id: 5 },
    { user_id: 6, skill_id: 2 },
    { user_id: 7, skill_id: 3 },
    { user_id: 8, skill_id: 1 },
    { user_id: 9, skill_id: 4 },
    { user_id: 10, skill_id: 5 }
  ])
}
