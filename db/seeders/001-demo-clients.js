'use strict';

var faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Clients", [{
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-04-29 12:38:31",
      updatedAt: "2019-04-29 12:38:31"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-02-18 15:43:29",
      updatedAt: "2019-02-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "beneficial",
      createdAt: "2018-06-07 11:20:17",
      updatedAt: "2018-06-07 11:20:17"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    },{
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "potencial",
      createdAt: "2019-04-29 12:38:31",
      updatedAt: "2019-04-29 12:38:31"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-02-18 15:43:29",
      updatedAt: "2019-02-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "beneficial",
      createdAt: "2018-06-07 11:20:17",
      updatedAt: "2018-06-07 11:20:17"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Clients", null, {});
  }
};
