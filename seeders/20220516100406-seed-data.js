module.exports = {
  up: async (queryInterface) => {
    // Define category data
    const users = [
      {
        name: 'Graham Lim',
        email: 'glim@globalization-partners.com',
        password: 'abc123',
        user_type: 'partner manager',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Janet Soon',
        email: 'jsoon@globalization-partners.com',
        password: 'abc123',
        user_type: 'referring employee',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    queryInterface.bulkInsert('users', users);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null);
  },
};