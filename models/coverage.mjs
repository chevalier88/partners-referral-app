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
      partnerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'partner',
          key: 'id',
        },
      },
      serviceId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'service',
          key: 'id',
        },
      },
      regionId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'region',
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