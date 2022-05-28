export default function initRequestRegionModel(sequelize, DataTypes) {
  return sequelize.define('requests_regions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    requestId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'request',
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
  }, { underscored: true });
}