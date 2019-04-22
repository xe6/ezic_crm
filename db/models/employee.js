"use strict";
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      fio: DataTypes.STRING,
      contact_info: DataTypes.STRING,
      lastName: DataTypes.ENUM("teacher", "cleaner", "sys_admin", "hr", "manager"),
      salary: DataTypes.FLOAT(7,2)
    },
    {
      timestamps: true
    }
  );
  Employee.associate = function(models) {
    Employee.belongsTo(models.Deal, {
      foreignKey: 'id',
      targetKey: 'id_teacher'
    });
    Employee.belongsTo(models.Deal, {
      foreignKey: 'id',
      targetKey: 'id_employee_concluded'
    });
  };
  return Employee;
};
