/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex('companies').insert([
    {
      name: 'Tech Innovators Inc.',
      description: 'Leading the way in cutting-edge technology solutions.',
      is_active: 'true'
    },
    {
      name: 'Global Solutions Ltd.',
      description: 'Providing comprehensive solutions for global challenges.',
      is_active: 'true'
    },
    {
      name: 'Creative Minds LLC',
      description: 'Fostering creativity and innovation in every project.',
      is_active: 'true'
    },
    {
      name: 'Enterprise Dynamics',
      description: 'Driving business success through dynamic enterprise solutions.',
      is_active: 'true'
    },
    {
      name: 'NextGen Technologies',
      description: 'Pioneering the next generation of technological advancements.',
      is_active: 'true'
    },
    {
      name: 'Visionary Ventures',
      description: 'Investing in visionary ideas and transformative ventures.',
      is_active: 'true'
    },
    {
      name: 'Pioneer Enterprises',
      description: 'Leading the industry with pioneering business strategies.',
      is_active: 'true'
    },
    {
      name: 'Innovative Systems',
      description: 'Delivering innovative systems for modern business needs.',
      is_active: 'true'
    },
    {
      name: 'Future Forward Corp.',
      description: 'Focused on building a sustainable and forward-thinking future.',
      is_active: 'true'
    },
    {
      name: 'Dynamic Developments',
      description: 'Creating dynamic solutions for evolving market demands.',
      is_active: 'true'
    }
  ])
}
