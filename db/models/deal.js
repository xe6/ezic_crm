"use strict";
module.exports = (sequelize, DataTypes) => {
  const Deal = sequelize.define(
    "Deal",
    {
      id_course: DataTypes.INTEGER,
      id_teacher: DataTypes.INTEGER,
      id_client: DataTypes.INTEGER,
      id_employee_concluded: DataTypes.INTEGER,
      contact_name: DataTypes.STRING,
      contact_number: DataTypes.STRING,
      stage: DataTypes.ENUM("new", "contract_signed", "payment", "success"),
      stage_date: DataTypes.DATE,
      extra_info: DataTypes.TEXT
    },
    {
      timestamps: true
    }
  );
  Deal.associate = function(models) {
      Deal.hasMany(models.Course, {
          foreignKey: "id",
          sourceKey: "id_course"
      });
      Deal.hasMany(models.Employee, {
        foreignKey: "id",
        sourceKey: "id_teacher"
      });
      Deal.hasMany(models.Client, {
          foreignKey: "id",
          sourceKey: "id_client"
      });
      Deal.hasMany(models.Employee, {
          foreignKey: "id",
          sourceKey: "id_employee_concluded"
      })
  };
  return Deal;
};
