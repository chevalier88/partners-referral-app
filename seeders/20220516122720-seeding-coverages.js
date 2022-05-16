module.exports = {
  up: async (queryInterface) => {
    // Define category data
    const coverages = [
      {
        partners_id: 1,
        services_id: 1,
        regions_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partners_id: 1,
        services_id: 1,
        regions_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partners_id: 1,
        services_id: 2,
        regions_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partners_id: 1,
        services_id: 2,
        regions_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partners_id: 2,
        services_id: 1,
        regions_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partners_id: 2,
        services_id: 1,
        regions_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partners_id: 2,
        services_id: 2,
        regions_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partners_id: 2,
        services_id: 2,
        regions_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partners_id: 3,
        services_id: 1,
        regions_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partners_id: 3,
        services_id: 2,
        regions_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partners_id: 4,
        services_id: 4,
        regions_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partners_id: 5,
        services_id: 3,
        regions_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    queryInterface.bulkInsert('coverages', coverages);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('coverages', null);
  },
};