/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('ratings').insert([
    {
      user_id: 1,
      rating: 4.5,
      comment: 'Excellent work, very satisfied with the results.'
    },
    {
      user_id: 2,
      rating: 3.8,
      comment: 'Good performance, but there is room for improvement.'
    },
    {
      user_id: 3,
      rating: 4.0,
      comment: 'Met expectations and delivered on time.'
    },
    {
      user_id: 4,
      rating: 4.7,
      comment: 'Outstanding contribution to the project.'
    },
    {
      user_id: 5,
      rating: 3.5,
      comment: 'Satisfactory work, but communication could be better.'
    },
    {
      user_id: 6,
      rating: 4.2,
      comment: 'Great job, very professional and efficient.'
    },
    {
      user_id: 7,
      rating: 3.9,
      comment: 'Overall good performance, minor issues encountered.'
    },
    {
      user_id: 8,
      rating: 4.6,
      comment: 'Highly recommend, exceeded expectations.'
    },
    {
      user_id: 9,
      rating: 3.7,
      comment: 'Decent work, but could use more attention to detail.'
    },
    {
      user_id: 10,
      rating: 4.3,
      comment: 'Very pleased with the outcome, would hire again.'
    }
  ])
}
