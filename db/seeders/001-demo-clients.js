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
      status: "active",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
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
      status: "active",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
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
      status: "active",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
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
      status: "active",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
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
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-03-21 14:17:23",
      updatedAt: "2018-03-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-03-21 14:17:23",
      updatedAt: "2018-03-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-04-21 14:17:23",
      updatedAt: "2018-04-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-05-21 14:17:23",
      updatedAt: "2018-05-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-05-21 14:17:23",
      updatedAt: "2018-05-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-05-21 14:17:23",
      updatedAt: "2018-05-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-06-21 14:17:23",
      updatedAt: "2018-06-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-06-21 14:17:23",
      updatedAt: "2018-06-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-07-21 14:17:23",
      updatedAt: "2018-07-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-09-21 14:17:23",
      updatedAt: "2018-09-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-09-21 14:17:23",
      updatedAt: "2018-09-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-10-21 14:17:23",
      updatedAt: "2018-10-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-10-21 14:17:23",
      updatedAt: "2018-10-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-10-21 14:17:23",
      updatedAt: "2018-10-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-12-21 14:17:23",
      updatedAt: "2018-12-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "gone",
      createdAt: "2018-12-21 14:17:23",
      updatedAt: "2018-12-21 14:17:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-03-18 15:43:29",
      updatedAt: "2019-03-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-03-18 15:43:29",
      updatedAt: "2019-03-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-03-18 15:43:29",
      updatedAt: "2019-03-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-03-18 15:43:29",
      updatedAt: "2019-03-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-03-18 15:43:29",
      updatedAt: "2019-03-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-03-18 15:43:29",
      updatedAt: "2019-03-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-04-18 15:43:29",
      updatedAt: "2019-04-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-04-18 15:43:29",
      updatedAt: "2019-04-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-04-18 15:43:29",
      updatedAt: "2019-04-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-04-18 15:43:29",
      updatedAt: "2019-04-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2019-04-18 15:43:29",
      updatedAt: "2019-04-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-06-18 15:43:29",
      updatedAt: "2018-06-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-06-18 15:43:29",
      updatedAt: "2018-06-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-06-18 15:43:29",
      updatedAt: "2018-06-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-06-18 15:43:29",
      updatedAt: "2018-06-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-06-18 15:43:29",
      updatedAt: "2018-06-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-06-18 15:43:29",
      updatedAt: "2018-06-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-06-18 15:43:29",
      updatedAt: "2018-06-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-06-18 15:43:29",
      updatedAt: "2018-06-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-07-18 15:43:29",
      updatedAt: "2018-07-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-07-18 15:43:29",
      updatedAt: "2018-07-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-07-18 15:43:29",
      updatedAt: "2018-07-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-07-18 15:43:29",
      updatedAt: "2018-07-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-07-18 15:43:29",
      updatedAt: "2018-07-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-07-18 15:43:29",
      updatedAt: "2018-07-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-07-18 15:43:29",
      updatedAt: "2018-07-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-07-18 15:43:29",
      updatedAt: "2018-07-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-07-18 15:43:29",
      updatedAt: "2018-07-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-08-18 15:43:29",
      updatedAt: "2018-08-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-08-18 15:43:29",
      updatedAt: "2018-08-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-08-18 15:43:29",
      updatedAt: "2018-08-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-08-18 15:43:29",
      updatedAt: "2018-08-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-08-18 15:43:29",
      updatedAt: "2018-08-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-09-18 15:43:29",
      updatedAt: "2018-09-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-09-18 15:43:29",
      updatedAt: "2018-09-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-09-18 15:43:29",
      updatedAt: "2018-09-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-09-18 15:43:29",
      updatedAt: "2018-09-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-09-18 15:43:29",
      updatedAt: "2018-09-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-10-18 15:43:29",
      updatedAt: "2018-10-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-10-18 15:43:29",
      updatedAt: "2018-10-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-10-18 15:43:29",
      updatedAt: "2018-10-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-10-18 15:43:29",
      updatedAt: "2018-10-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-10-18 15:43:29",
      updatedAt: "2018-10-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-11-18 15:43:29",
      updatedAt: "2018-11-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-11-18 15:43:29",
      updatedAt: "2018-11-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-11-18 15:43:29",
      updatedAt: "2018-11-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-11-18 15:43:29",
      updatedAt: "2018-11-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-11-18 15:43:29",
      updatedAt: "2018-11-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-11-18 15:43:29",
      updatedAt: "2018-11-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-12-18 15:43:29",
      updatedAt: "2018-12-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-12-18 15:43:29",
      updatedAt: "2018-12-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-12-18 15:43:29",
      updatedAt: "2018-12-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-12-18 15:43:29",
      updatedAt: "2018-12-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-12-18 15:43:29",
      updatedAt: "2018-12-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-12-18 15:43:29",
      updatedAt: "2018-12-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-12-18 15:43:29",
      updatedAt: "2018-12-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-12-18 15:43:29",
      updatedAt: "2018-12-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "enrolled",
      createdAt: "2018-12-18 15:43:29",
      updatedAt: "2018-12-18 15:43:29"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-02-03 10:13:23",
      updatedAt: "2019-02-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-02-03 10:13:23",
      updatedAt: "2019-02-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-02-03 10:13:23",
      updatedAt: "2019-02-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-02-03 10:13:23",
      updatedAt: "2019-02-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-02-03 10:13:23",
      updatedAt: "2019-02-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-02-03 10:13:23",
      updatedAt: "2019-02-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-02-03 10:13:23",
      updatedAt: "2019-02-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-03-03 10:13:23",
      updatedAt: "2019-03-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-03-03 10:13:23",
      updatedAt: "2019-03-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-03-03 10:13:23",
      updatedAt: "2019-03-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-03-03 10:13:23",
      updatedAt: "2019-03-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-03-03 10:13:23",
      updatedAt: "2019-03-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-03-03 10:13:23",
      updatedAt: "2019-03-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-03-03 10:13:23",
      updatedAt: "2019-03-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-03-03 10:13:23",
      updatedAt: "2019-03-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-04-03 10:13:23",
      updatedAt: "2019-04-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-04-03 10:13:23",
      updatedAt: "2019-04-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-04-03 10:13:23",
      updatedAt: "2019-04-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-04-03 10:13:23",
      updatedAt: "2019-04-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-04-03 10:13:23",
      updatedAt: "2019-04-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-04-03 10:13:23",
      updatedAt: "2019-04-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-04-03 10:13:23",
      updatedAt: "2019-04-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-04-03 10:13:23",
      updatedAt: "2019-04-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-04-03 10:13:23",
      updatedAt: "2019-04-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-04-03 10:13:23",
      updatedAt: "2019-04-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-04-03 10:13:23",
      updatedAt: "2019-04-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-05-03 10:13:23",
      updatedAt: "2019-05-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-05-03 10:13:23",
      updatedAt: "2019-05-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-05-03 10:13:23",
      updatedAt: "2019-05-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-05-03 10:13:23",
      updatedAt: "2019-05-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-05-03 10:13:23",
      updatedAt: "2019-05-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2019-05-03 10:13:23",
      updatedAt: "2019-05-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-06-03 10:13:23",
      updatedAt: "2018-06-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-06-03 10:13:23",
      updatedAt: "2018-06-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-06-03 10:13:23",
      updatedAt: "2018-06-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-06-03 10:13:23",
      updatedAt: "2018-06-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-06-03 10:13:23",
      updatedAt: "2018-06-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-06-03 10:13:23",
      updatedAt: "2018-06-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-06-03 10:13:23",
      updatedAt: "2018-06-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-06-03 10:13:23",
      updatedAt: "2018-06-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-06-03 10:13:23",
      updatedAt: "2018-06-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-07-03 10:13:23",
      updatedAt: "2018-07-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-07-03 10:13:23",
      updatedAt: "2018-07-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-07-03 10:13:23",
      updatedAt: "2018-07-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-07-03 10:13:23",
      updatedAt: "2018-07-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-07-03 10:13:23",
      updatedAt: "2018-07-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-07-03 10:13:23",
      updatedAt: "2018-07-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-07-03 10:13:23",
      updatedAt: "2018-07-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-09-03 10:13:23",
      updatedAt: "2018-09-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-09-03 10:13:23",
      updatedAt: "2018-09-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-09-03 10:13:23",
      updatedAt: "2018-09-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-09-03 10:13:23",
      updatedAt: "2018-09-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-09-03 10:13:23",
      updatedAt: "2018-09-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-09-03 10:13:23",
      updatedAt: "2018-09-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-09-03 10:13:23",
      updatedAt: "2018-09-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-09-03 10:13:23",
      updatedAt: "2018-09-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-09-03 10:13:23",
      updatedAt: "2018-09-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-09-03 10:13:23",
      updatedAt: "2018-09-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-10-03 10:13:23",
      updatedAt: "2018-10-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-10-03 10:13:23",
      updatedAt: "2018-10-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-10-03 10:13:23",
      updatedAt: "2018-10-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-10-03 10:13:23",
      updatedAt: "2018-10-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-10-03 10:13:23",
      updatedAt: "2018-10-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-10-03 10:13:23",
      updatedAt: "2018-10-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-10-03 10:13:23",
      updatedAt: "2018-10-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-10-03 10:13:23",
      updatedAt: "2018-10-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-10-03 10:13:23",
      updatedAt: "2018-10-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-11-03 10:13:23",
      updatedAt: "2018-11-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-11-03 10:13:23",
      updatedAt: "2018-11-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-11-03 10:13:23",
      updatedAt: "2018-11-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-12-03 10:13:23",
      updatedAt: "2018-12-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-12-03 10:13:23",
      updatedAt: "2018-12-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-12-03 10:13:23",
      updatedAt: "2018-12-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-12-03 10:13:23",
      updatedAt: "2018-12-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-12-03 10:13:23",
      updatedAt: "2018-12-03 10:13:23"
    }, {
      contact_name: faker.name.findName(),
      phone_number: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      status: "active",
      createdAt: "2018-12-03 10:13:23",
      updatedAt: "2018-12-03 10:13:23"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Clients", null, {});
  }
};
