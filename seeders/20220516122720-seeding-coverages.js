module.exports = {
  up: async (queryInterface) => {
    // Define category data
    const coverages = [
      {
        partner_id: 1,
        service_id: 1,
        region_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 1,
        service_id: 1,
        region_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 1,
        service_id: 2,
        region_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 1,
        service_id: 2,
        region_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 2,
        service_id: 1,
        region_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 2,
        service_id: 1,
        region_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 2,
        service_id: 2,
        region_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 2,
        service_id: 2,
        region_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 3,
        service_id: 1,
        region_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 3,
        service_id: 2,
        region_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 4,
        service_id: 4,
        region_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 5,
        service_id: 3,
        region_id: 3,
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