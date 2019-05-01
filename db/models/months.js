"use strict";
module.exports = (sequelize, DataTypes) => {
  const Month = sequelize.define("Month",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    month: DataTypes.STRING
  },
  {
    timestamps: true
  });

  return Month;
};
