export default function initPartnerModel(sequelize, DataTypes) {
  return sequelize.define(
    'partner',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.TEXT,
      },
      partnerManagerId: {
        type: DataTypes.TEXT,
        references:{
          model:'users',
          key:'id',
        },
      },
      primaryContactName: {
        type: DataTypes.TEXT,
      },
      primaryContactEmail: {
        type: DataTypes.TEXT,
      },
      secondaryContactName: {
        type: DataTypes.TEXT,
      },
      secondaryContactEmail: {
        type: DataTypes.TEXT,
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