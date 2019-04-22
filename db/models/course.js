"use strict";
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      course_name: DataTypes.STRING,
      status: DataTypes.ENUM("started", "in_progress"),
      price_per_month: DataTypes.FLOAT(7,2),
      quantity_students_planned: DataTypes.INTEGER,
      quantity_students_initial: DataTypes.INTEGER,
      qunatity_students_now: DataTypes.INTEGER
    },
    {
      timestamps: true
    }
  );
  Course.associate = function(models) {
    Course.belongsTo(models.Deal, {
      foreignKey: "id",
      targetKey: "id_course"
    })
  };
  return Course;
};
