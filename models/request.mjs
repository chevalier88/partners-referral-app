export default function initRequestModel(sequelize, DataTypes) {
  return sequelize.define(
    'request',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      referringEmployeeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
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
      employeeNumbers: {
        type: DataTypes.INTEGER,
      },
      entitiesExisting: {
        type: DataTypes.TEXT,
      },
      comments: {
        type: DataTypes.TEXT,
      },
      partnerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'partners',
          key: 'id',
        },
      },
      requestAddressed: {
        type: DataTypes.BOOLEAN,
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