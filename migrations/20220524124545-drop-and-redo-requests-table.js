'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'requests', // table name
        'services_id', // new field name
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:'services',
            key:'id',
          },
        },
      ),
      queryInterface.addColumn(
        'requests',
        'partner_id',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references:{
            model:'partners',
            key:'id',
          },
        },
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('requests', 'services_id'),
      queryInterface.removeColumn('requests', 'partner_id'),
    ]);
  },
};
