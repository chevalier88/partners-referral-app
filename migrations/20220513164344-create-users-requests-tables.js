const { INTEGER } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
      },
      email: {
        type: Sequelize.TEXT,
      },
      password: {
        type: Sequelize.TEXT,
      },
      user_type: {
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

    await queryInterface.createTable('requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      referring_employee_id:{
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key:'id',
        }
      },
      partner_manager_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key:'id',
        }
      },
      request_type:{
        type: Sequelize.TEXT,
      },
      employee_numbers:{
        type: Sequelize.INTEGER,
      },
      entities_existing:{
        type: Sequelize.TEXT,
      },
      comments:{
        type: Sequelize.TEXT,
      },
      request_addressed:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
      queryInterface.dropTable('users'),
      queryInterface.dropTable('requests'),
    ]);
  },
};
