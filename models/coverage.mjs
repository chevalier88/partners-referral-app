export default function initCoverageModel(sequelize, DataTypes) {
  return sequelize.define(
    'coverage',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      partnersId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'partners',
          key: 'id',
        },
      },
      servicesId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'services',
          key: 'id',
        },
      },
      regionsId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'regions',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    }
  );
}