/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('contracts').insert([
    {
      project_id: 1,
      user_id: 1,
      working_hours: 160,
      advanced_payment: 1000,
      start_date: '2023-11-01',
      end_date: '2023-12-01'
    },
    {
      project_id: 2,
      user_id: 2,
      working_hours: 120,
      advanced_payment: 800,
      start_date: '2023-11-05',
      end_date: '2023-12-05'
    },
    {
      project_id: 3,
      user_id: 3,
      working_hours: 140,
      advanced_payment: 900,
      start_date: '2023-11-10',
      end_date: '2023-12-10'
    },
    {
      project_id: 4,
      user_id: 4,
      working_hours: 150,
      advanced_payment: 950,
      start_date: '2023-11-15',
      end_date: '2023-12-15'
    },
    {
      project_id: 5,
      user_id: 5,
      working_hours: 130,
      advanced_payment: 850,
      start_date: '2023-11-20',
      end_date: '2023-12-20'
    },
    {
      project_id: 6,
      user_id: 6,
      working_hours: 160,
      advanced_payment: 1000,
      start_date: '2023-11-25',
      end_date: '2023-12-25'
    },
    {
      project_id: 7,
      user_id: 7,
      working_hours: 120,
      advanced_payment: 800,
      start_date: '2023-11-30',
      end_date: '2023-12-30'
    },
    {
      project_id: 8,
      user_id: 8,
      working_hours: 140,
      advanced_payment: 900,
      start_date: '2023-12-01',
      end_date: '2024-01-01'
    },
    {
      project_id: 9,
      user_id: 9,
      working_hours: 150,
      advanced_payment: 950,
      start_date: '2023-12-05',
      end_date: '2024-01-05'
    },
    {
      project_id: 10,
      user_id: 10,
      working_hours: 130,
      advanced_payment: 850,
      start_date: '2023-12-10',
      end_date: '2024-01-10'
    }
  ])
}
