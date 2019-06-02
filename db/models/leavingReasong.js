"use strict";
module.exports = (sequelize, DataTypes) => {
  const LeavingReason = sequelize.define("LeavingReason",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    reason: DataTypes.STRING
  },
  {
    timestamps: true
  });

  return LeavingReason;
};
