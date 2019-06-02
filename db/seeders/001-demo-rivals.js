'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Rivals", [{
      firm_name: "Firm 1",
      course_name: "PHP",
      price_per_month: 3000.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      firm_name: "Firm 2",
      course_name: "PHP",
      price_per_month: 3100.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      firm_name: "Firm 3",
      course_name: "PHP",
      price_per_month: 3200.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      firm_name: "Firm 1",
      course_name: "Fullstack JS",
      price_per_month: 3400.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      firm_name: "Firm 2",
      course_name: "Fullstack JS",
      price_per_month: 3500.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      firm_name: "Firm 3",
      course_name: "Fullstack JS",
      price_per_month: 3300.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      firm_name: "Firm 1",
      course_name: "Java",
      price_per_month: 3200.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      firm_name: "Firm 2",
      course_name: "Java",
      price_per_month: 3150.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      firm_name: "Firm 3",
      course_name: "Java",
      price_per_month: 3100.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      firm_name: "Firm 1",
      course_name: ".Net + C#",
      price_per_month: 3000.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      firm_name: "Firm 2",
      course_name: ".Net + C#",
      price_per_month: 3250.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      firm_name: "Firm 3",
      course_name: ".Net + C#",
      price_per_month: 3350.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      firm_name: "Firm 1",
      course_name: "Front-End",
      price_per_month: 2900.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      firm_name: "Firm 1",
      course_name: "Front-End",
      price_per_month: 2800.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      firm_name: "Firm 1",
      course_name: "Front-End",
      price_per_month: 2850.00,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Rivals", null, {});
  }
};
