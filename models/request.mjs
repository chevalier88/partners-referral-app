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
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
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
      serviceId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'service',
          key: 'id',
        },
      },
      partnerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'partner',
          key: 'id',
        },
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    }
  );
}