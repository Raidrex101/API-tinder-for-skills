/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('ratings').del()
  await knex('ratings').insert([
    { rating_id: 1, user_id: 1, contract_id: 10, rating: 4.5, comment: 'Excellent work, very satisfied with the results.' },
    { rating_id: 2, user_id: 2, contract_id: 4, rating: 3.8, comment: 'Good performance, but there is room for improvement.' },
    { rating_id: 3, user_id: 3, contract_id: 3, rating: 4.0, comment: 'Met expectations and delivered on time.' },
    { rating_id: 4, user_id: 4, contract_id: 6, rating: 4.7, comment: 'Outstanding contribution to the project.' },
    { rating_id: 5, user_id: 5, contract_id: 7, rating: 3.5, comment: 'Satisfactory work, but communication could be better.' },
    { rating_id: 6, user_id: 6, contract_id: 5, rating: 4.2, comment: 'Great job, very professional and efficient.' },
    { rating_id: 7, user_id: 7, contract_id: 2, rating: 3.9, comment: 'Overall good performance, minor issues encountered.' },
    { rating_id: 8, user_id: 8, contract_id: 1, rating: 4.6, comment: 'Highly recommend, exceeded expectations.' },
    { rating_id: 9, user_id: 9, contract_id: 8, rating: 3.7, comment: 'Decent work, but could use more attention to detail.' },
    { rating_id: 10, user_id: 10, contract_id: 9, rating: 4.3, comment: 'Very pleased with the outcome, would hire again.' }
  ])
}
