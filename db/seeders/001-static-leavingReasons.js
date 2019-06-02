'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("LeavingReasons", [{
        reason: "Too expensive",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        reason: "Too hard",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        reason: "Too easy",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        reason: "The teacher is not qualified enough",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        reason: "Not comfortable location",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    },{
        reason: "Others",
        createdAt: "2019-04-29 12:38:31",
        updatedAt: "2019-04-29 12:38:31"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("LeavingReasons", null, {});
  }
};
