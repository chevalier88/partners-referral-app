module.exports = {
  up: async (queryInterface) => {
    // Define category data
    const users = [
      {
        name: 'Craig Goldblatt',
        email: 'cgoldblatt@globalization-partners.com',
        password: 'abc123',
        user_type: 'partner manager',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Albert Barbe',
        email: 'abarbe@globalization-partners.com',
        password: 'abc123',
        user_type: 'partner manager',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Josh Kim',
        email: 'jkim@globalization-partners.com',
        password: 'abc123',
        user_type: 'partner manager',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Thomas Chow',
        email: 'tchow@globalization-partners.com',
        password: 'abc123',
        user_type: 'partner manager',
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