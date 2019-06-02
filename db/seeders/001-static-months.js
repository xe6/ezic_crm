'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Months", [{
        month: "January",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        month: "February",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        month: "March",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        month: "April",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        month: "May",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        month: "June",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        month: "July",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        month: "August",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        month: "September",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        month: "October",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        month: "November",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        month: "December",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Months", null, {});
  }
};
