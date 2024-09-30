/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE skills RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE users RESTART IDENTITY CASCADE')
  // se borran las tablas en un orden especifico para que no se rompa la base de datos en las llaves foraneas
  await knex('users').insert([
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      phone: '555-0100',
      is_active: 'true'
    },
    {
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'jane.smith@example.com',
      phone: '555-0101',
      is_active: 'true'
    },
    {
      first_name: 'Alice',
      last_name: 'Johnson',
      email: 'alice.johnson@example.com',
      phone: '555-0102',
      is_active: 'true'
    },
    {
      first_name: 'Bob',
      last_name: 'Brown',
      email: 'bob.brown@example.com',
      phone: '555-0103',
      is_active: 'true'
    },
    {
      first_name: 'Charlie',
      last_name: 'Davis',
      email: 'charlie.davis@example.com',
      phone: '555-0104',
      is_active: 'true'
    },
    {
      first_name: 'Diana',
      last_name: 'Evans',
      email: 'diana.evans@example.com',
      phone: '555-0105',
      is_active: 'true'
    },
    {
      first_name: 'Eve',
      last_name: 'Foster',
      email: 'eve.foster@example.com',
      phone: '555-0106',
      is_active: 'true'
    },
    {
      first_name: 'Frank',
      last_name: 'Green',
      email: 'frank.green@example.com',
      phone: '555-0107',
      is_active: 'true'
    },
    {
      first_name: 'Grace',
      last_name: 'Hall',
      email: 'grace.hall@example.com',
      phone: '555-0108',
      is_active: 'true'
    },
    {
      first_name: 'Henry',
      last_name: 'King',
      email: 'henry.king@example.com',
      phone: '555-0109',
      is_active: 'true'
    }
  ])
}
