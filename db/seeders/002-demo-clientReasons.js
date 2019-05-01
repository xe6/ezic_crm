'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ClientReasons", [{
        Client_id: 8,
        Reason_id: 1,
        createdAt: "2019-01-01 16:21:31",
        updatedAt: "2019-01-01 16:21:31"
    }, {
        Client_id: 13,
        Reason_id: 1,
        createdAt: "2019-01-01 16:21:31",
        updatedAt: "2019-01-01 16:21:31"
    }, {
        Client_id: 14,
        Reason_id: 1,
        createdAt: "2019-01-01 16:21:31",
        updatedAt: "2019-01-01 16:21:31"
    }, {
        Client_id: 15,
        Reason_id: 1,
        createdAt: "2019-01-01 16:21:31",
        updatedAt: "2019-01-01 16:21:31"
    }, {
        Client_id: 16,
        Reason_id: 2,
        createdAt: "2019-01-01 16:21:31",
        updatedAt: "2019-01-01 16:21:31"
    }, {
        Client_id: 17,
        Reason_id: 3,
        createdAt: "2019-01-01 16:21:31",
        updatedAt: "2019-01-01 16:21:31"
    }, {
        Client_id: 18,
        Reason_id: 3,
        createdAt: "2019-01-01 16:21:31",
        updatedAt: "2019-01-01 16:21:31"
    }, {
        Client_id: 19,
        Reason_id: 4,
        createdAt: "2019-01-01 16:21:31",
        updatedAt: "2019-01-01 16:21:31"
    }, {
        Client_id: 20,
        Reason_id: 5,
        createdAt: "2019-01-01 16:21:31",
        updatedAt: "2019-01-01 16:21:31"
    }, {
        Client_id: 21,
        Reason_id: 5,
        createdAt: "2019-01-01 16:21:31",
        updatedAt: "2019-01-01 16:21:31"
    }, {
        Client_id: 22,
        Reason_id: 6,
        createdAt: "2019-01-01 16:21:31",
        updatedAt: "2019-01-01 16:21:31"
    }, {
        Client_id: 23,
        Reason_id: 2,
        createdAt: "2019-01-01 16:21:31",
        updatedAt: "2019-01-01 16:21:31"
    }, {
        Client_id: 24,
        Reason_id: 2,
        createdAt: "2019-01-01 16:21:31",
        updatedAt: "2019-01-01 16:21:31"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ClientReasons", null, {});
  }
};
