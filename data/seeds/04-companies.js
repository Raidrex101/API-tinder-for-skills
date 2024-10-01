/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex('companies').insert([
    {
      name: 'Tech Innovators Inc.',
      description: 'Leading the way in cutting-edge technology solutions.'
    },
    {
      name: 'Global Solutions Ltd.',
      description: 'Providing comprehensive solutions for global challenges.'
    },
    {
      name: 'Creative Minds LLC',
      description: 'Fostering creativity and innovation in every project.'
    },
    {
      name: 'Enterprise Dynamics',
      description: 'Driving business success through dynamic enterprise solutions.'
    },
    {
      name: 'NextGen Technologies',
      description: 'Pioneering the next generation of technological advancements.'
    },
    {
      name: 'Visionary Ventures',
      description: 'Investing in visionary ideas and transformative ventures.'
    },
    {
      name: 'Pioneer Enterprises',
      description: 'Leading the industry with pioneering business strategies.'
    },
    {
      name: 'Innovative Systems',
      description: 'Delivering innovative systems for modern business needs.'
    },
    {
      name: 'Future Forward Corp.',
      description: 'Focused on building a sustainable and forward-thinking future.'
    },
    {
      name: 'Dynamic Developments',
      description: 'Creating dynamic solutions for evolving market demands.'
    }
  ])
}
