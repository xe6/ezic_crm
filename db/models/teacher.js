"use strict";
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define("Teacher", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    fio: DataTypes.STRING,
    contact_info: DataTypes.STRING,
    salary: DataTypes.FLOAT(7,2)
  },
  {
    timestamps: true
  });

  Teacher.associate = function(models) {
    // Teacher.hasMany(models.Deal);
    Teacher.belongsToMany(models.Course, {through: 'TeacherCourses'});
  };

  return Teacher;
};
