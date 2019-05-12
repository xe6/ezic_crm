"use strict";
module.exports = (sequelize, DataTypes) => {
  const Deal = sequelize.define("Deal",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    contact_name: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    extra_info: DataTypes.TEXT
  },
  {
    timestamps: true
  });

  Deal.associate = function(models) {
    Deal.belongsTo(models.Client);
    Deal.belongsTo(models.Teacher);
    Deal.belongsTo(models.Course);
    Deal.belongsTo(models.User);
  };

  return Deal;
};
