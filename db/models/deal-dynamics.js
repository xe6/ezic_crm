"use strict";
module.exports = (sequelize, DataTypes) => {
  const DealDynamics = sequelize.define("DealDynamics",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    stage: DataTypes.ENUM("new", "contract_signed", "payment", "success"),
    stage_date: DataTypes.DATE,
  },
  {
    timestamps: true
  });

  DealDynamics.associate = function(models) {
  };

  return DealDynamics;
};
