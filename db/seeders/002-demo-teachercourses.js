'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Teachercourses", [{
      Teacher_id: 1,
      Course_id: 1,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      Teacher_id: 1,
      Course_id: 2,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      Teacher_id: 2,
      Course_id: 3,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      Teacher_id: 2,
      Course_id: 4,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      Teacher_id: 3,
      Course_id: 5,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    },  {
      Teacher_id: 3,
      Course_id: 2,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      Teacher_id: 4,
      Course_id: 5,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }, {
      Teacher_id: 4,
      Course_id: 2,
      createdAt: "2019-01-01 16:21:31",
      updatedAt: "2019-01-01 16:21:31"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Teachercourses", null, {});
  }
};
