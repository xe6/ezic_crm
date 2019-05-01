'use strict';

var faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Deals", [{
      contact_number: faker.phone.phoneNumberFormat(),
      stage: "new",
      stage_date: "2019-04-25 15:00:00",
      extra_info: faker.lorem.sentence(),
      createdAt: "2019-04-25 15:00:00",
      updatedAt: "2019-04-25 15:00:00",
      Course_id: 1,
      Teacher_id: 1,
      Client_id: 9,
      Employee_concluded_id: 1
    }, {
      contact_number: faker.phone.phoneNumberFormat(),
      stage: "new",
      stage_date: "2019-04-28 15:00:00",
      extra_info: faker.lorem.words(),
      createdAt: "2019-04-28 16:00:00",
      updatedAt: "2019-04-28 16:00:00",
      Course_id: 4,
      Teacher_id: 2,
      Client_id: 4,
      Employee_concluded_id: 2
    }, {
      contact_number: faker.phone.phoneNumberFormat(),
      stage: "contract_signed",
      stage_date: "2019-04-13 12:00:00",
      extra_info: faker.lorem.sentences(),
      createdAt: "2019-04-13 12:00:00",
      updatedAt: "2019-04-13 12:00:00",
      Course_id: 2,
      Teacher_id: 3,
      Client_id: 5,
      Employee_concluded_id: 2
    }, {
      contact_number: faker.phone.phoneNumberFormat(),
      stage: "contract_signed",
      stage_date: "2019-04-11 13:00:00",
      extra_info: faker.lorem.paragraph(),
      createdAt: "2019-04-11 13:00:00",
      updatedAt: "2019-04-11 13:00:00",
      Course_id: 3,
      Teacher_id: 3,
      Client_id: 10,
      Employee_concluded_id: 3
    }, {
      contact_number: faker.phone.phoneNumberFormat(),
      stage: "payment",
      stage_date: "2019-05-02 19:00:00",
      extra_info: faker.lorem.paragraph(),
      createdAt: "2019-05-02 19:00:00",
      updatedAt: "2019-05-02 19:00:00",
      Course_id: 5,
      Teacher_id: 4,
      Client_id: 5,
      Employee_concluded_id: 3
    }, {
      contact_number: faker.phone.phoneNumberFormat(),
      stage: "payment",
      stage_date: "2019-05-02 19:00:00",
      extra_info: faker.lorem.sentences(),
      createdAt: "2019-05-02 19:00:00",
      updatedAt: "2019-05-02 19:00:00",
      Course_id: 5,
      Teacher_id: 4,
      Client_id: 3,
      Employee_concluded_id: 3
    }, {
      contact_number: faker.phone.phoneNumberFormat(),
      stage: "success",
      stage_date: "2019-04-16 15:00:00",
      extra_info: faker.lorem.sentences(),
      createdAt: "2019-04-16 15:00:00",
      updatedAt: "2019-04-16 15:00:00",
      Course_id: 3,
      Teacher_id: 3,
      Client_id: 7,
      Employee_concluded_id: 1
    }, {
      contact_number: faker.phone.phoneNumberFormat(),
      stage: "success",
      stage_date: "2019-04-18 12:00:00",
      extra_info: faker.lorem.paragraph(),
      createdAt: "2019-04-18 12:00:00",
      updatedAt: "2019-04-18 12:00:00",
      Course_id: 5,
      Teacher_id: 2,
      Client_id: 2,
      Employee_concluded_id: 2
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Deals", null, {});
  }
};
