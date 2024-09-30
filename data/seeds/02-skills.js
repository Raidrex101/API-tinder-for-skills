/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('skills').insert([
    {
      name: 'Public Speaking',
      description: 'Ability to effectively communicate and engage an audience.'
    },
    {
      name: 'Oratory',
      description: 'Skill in formal speaking, especially in public settings.'
    },
    {
      name: 'JavaScript Programming',
      description: 'Proficiency in writing and understanding JavaScript code.'
    },
    {
      name: 'Python Programming',
      description: 'Expertise in developing applications using Python.'
    },
    {
      name: 'Java Programming',
      description: 'Ability to design and implement software using Java.'
    },
    {
      name: 'C++ Programming',
      description: 'Skill in developing high-performance applications with C++.'
    },
    {
      name: 'Data Analysis',
      description: 'Capability to analyze and interpret complex data sets.'
    },
    {
      name: 'Project Management',
      description: 'Experience in planning, executing, and closing projects.'
    },
    {
      name: 'Graphic Design',
      description: 'Creativity in designing visual content using graphic tools.'
    },
    {
      name: 'Digital Marketing',
      description: 'Expertise in promoting products or services through digital channels.'
    }
  ])
}
