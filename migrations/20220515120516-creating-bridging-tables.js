'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('requests_partners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      requests_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'requests',
          key: 'id',
        },
      },
      partners_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'partners',
          key: 'id',
        },
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('requests_partners');
    await queryInterface.dropTable('items');
    await queryInterface.dropTable('categories');
  }
};
