'use strict';

var faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Teachers", [{
      fio: faker.name.findName(),
      contact_info: faker.phone.phoneNumberFormat(),
      salary: "40000",
      createdAt: "2017-01-01 16:21:31",
      updatedAt: "2017-01-01 16:21:31"
    }, {
      fio: faker.name.findName(),
      contact_info:  faker.internet.email(),
      salary: "30000",
      createdAt: "2017-02-02 18:11:31",
      updatedAt: "2017-02-02 18:11:31"
    }, {
      fio: faker.name.findName(),
      contact_info:  faker.internet.email(),
      salary: "50000",
      createdAt: "2017-04-04 17:31:31",
      updatedAt: "2017-04-04 17:31:31"
    }, {
      fio: faker.name.findName(),
      contact_info: faker.phone.phoneNumberFormat(),
      salary: "35000",
      createdAt: "2017-08-06 20:41:31",
      updatedAt: "2017-08-06 20:41:31"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Teachers", null, {});
  }
};
