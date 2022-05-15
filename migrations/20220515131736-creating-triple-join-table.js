'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coverages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      partners_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'partners',
          key: 'id',
        },
      },
      services_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'services',
          key: 'id',
        },
      },
      regions_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'regions',
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
    await queryInterface.dropTable('coverages');
  }
};
