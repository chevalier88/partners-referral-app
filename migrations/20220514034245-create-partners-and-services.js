module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('regions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('partners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name:{
        type: Sequelize.TEXT,
      },
      partner_manager_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key:'id',
        }
      },
      primary_contact_name:{
        type: Sequelize.TEXT,
      },
      primary_contact_email:{
        type: Sequelize.TEXT,
      },
      secondary_contact_name:{
        type: Sequelize.TEXT,
      },
      secondary_contact_email:{
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name:{
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await Promise.all([
      queryInterface.dropTable('regions'),
      queryInterface.dropTable('partners'),
      queryInterface.dropTable('services'),
    ]);
  },
};