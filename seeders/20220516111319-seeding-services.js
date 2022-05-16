module.exports = {
  up: async (queryInterface) => {
    // Define category data
    const services = [
      {
        name: 'entity setup',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'payroll',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'venture capital',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'hr consulting',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    queryInterface.bulkInsert('services', services);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('services', null);
  },
};