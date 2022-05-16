module.exports = {
  up: async (queryInterface) => {
    // Define category data
    const regions = [
      {
        name: 'Southeast Asia (ASEAN)',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Japan',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Korea',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Hong Kong and Greater Bay Area (HK GBA)',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Australia and New Zealand (ANZ)',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Asia Pacific (APAC)',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Europe, Middle East and Africa (EMEA)',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'North America (NA)',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    queryInterface.bulkInsert('regions', regions);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('regions', null);
  },
};