'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Courses", [{
      course_name: "Fullstack JS",
      status: "started",
      price_per_month: 3000.00,
      quantity_students_planned: 25,
      quantity_students_initial: 27,
      quantity_students_now: 20,
      course_start_date: "2018-11-01 16:21:31",
      course_end_date: "2019-04-01 16:21:31",
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      course_name: "PHP",
      status: "in_progress",
      price_per_month: 2900.00,
      quantity_students_planned: 30,
      quantity_students_initial: 25,
      quantity_students_now: 23,
      course_start_date: "2019-01-01 16:21:31",
      course_end_date: "2019-04-01 16:21:31",
      createdAt: "2019-04-26 13:31:31",
      updatedAt: "2019-04-26 13:31:31"
    }, {
      course_name: "Java",
      status: "in_progress",
      price_per_month: 3200.00,
      quantity_students_planned: 20,
      quantity_students_initial: 24,
      quantity_students_now: 18,
      course_start_date: "2019-02-01 16:21:31",
      course_end_date: "2019-08-01 16:21:31",
      createdAt: "2019-04-25 11:11:31",
      updatedAt: "2019-04-25 11:11:31"
    }, {
      course_name: ".Net + C#",
      status: "started",
      price_per_month: 3300.00,
      quantity_students_planned: 22,
      quantity_students_initial: 22,
      quantity_students_now: 22,
      course_start_date: "2019-01-01 16:21:31",
      course_end_date: "2019-06-01 16:21:31",
      createdAt: "2019-02-07 17:25:31",
      updatedAt: "2019-02-07 17:25:31"
    }, {
      course_name: "Front-End",
      status: "in_progress",
      price_per_month: 2500.00,
      quantity_students_planned: 24,
      quantity_students_initial: 25,
      quantity_students_now: 21,
      course_start_date: "2018-12-01 16:21:31",
      course_end_date: "2019-05-01 16:21:31",
      createdAt: "2017-03-03 18:23:31",
      updatedAt: "2017-03-03 18:23:31"}], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', {raw: true})
      .then(queryInterface.bulkDelete("Courses", null, {}));
  }
};
