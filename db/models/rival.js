"use strict";
module.exports = (sequelize, DataTypes) => {
  const Rival = sequelize.define(
    "Rival",
    {
      firm_name: DataTypes.STRING,
      course_name: DataTypes.STRING,
      price_per_month: DataTypes.FLOAT(7,2)
    },
    {
      timestamps: true
    }
  );
  Rival.associate = function(models) {
    // associations can be defined here
  };
  
  return Rival;
};
