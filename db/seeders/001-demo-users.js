'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [{
      login: "manager1",
      password: "manager1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@demo.com",
      createdAt: "2019-04-29 12:38:31",
      updatedAt: "2019-04-29 12:38:31"
    }, {
      login: "manager2",
      password: "manager2",
      firstName: "Tim",
      lastName: "Brown",
      email: "tim.brown@demo.com",
      createdAt: "2019-02-18 15:43:29",
      updatedAt: "2019-02-18 15:43:29"
    }, {
      login: "manager3",
      password: "manager3",
      firstName: "Chris",
      lastName: "White",
      email: "chris.white@demo.com",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
