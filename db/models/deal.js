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
    stage: DataTypes.ENUM("new", "contract_signed", "payment", "success"),
    stage_date: DataTypes.DATE,
    extra_info: DataTypes.TEXT
  },
  {
    timestamps: true
  });

  Deal.associate = function(models) {
    Deal.belongsTo(models.Client);
    Deal.belongsTo(models.Teacher);
    Deal.belogsTo(models.Course);
    Deal.belongTo(models.User);
  };
  
  return Deal;
};
