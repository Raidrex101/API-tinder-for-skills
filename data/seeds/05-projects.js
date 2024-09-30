/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').insert([
    {
      description: 'Develop a new e-commerce platform',
      status: 'open',
      company_id: 1
    },
    {
      description: 'Implement a cloud-based CRM system',
      status: 'open',
      company_id: 2
    },
    {
      description: 'Design a mobile app for online banking',
      status: 'open',
      company_id: 3
    },
    {
      description: 'Upgrade the existing IT infrastructure',
      status: 'open',
      company_id: 4
    },
    {
      description: 'Launch a digital marketing campaign',
      status: 'open',
      company_id: 5
    },
    {
      description: 'Create a new brand identity',
      status: 'open',
      company_id: 6
    },
    {
      description: 'Develop a blockchain-based solution',
      status: 'open',
      company_id: 7
    },
    {
      description: 'Implement AI-driven analytics',
      status: 'open',
      company_id: 8
    },
    {
      description: 'Expand into international markets',
      status: 'open',
      company_id: 9
    },
    {
      description: 'Conduct a comprehensive market research study',
      status: 'open',
      company_id: 10
    }
  ])
}
