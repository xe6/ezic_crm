'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Deals", [{
      contact_number: "+38 067 212 8899",
      stage: "new",
      stage_date: "2019-04-25 15:00:00",
      extra_info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      createdAt: "2019-04-25 15:00:00",
      updatedAt: "2019-04-25 15:00:00",
      Course_id: 1,
      Teacher_id: 1,
      Client_id: 9,
      Employee_concluded_id: 1
    }, {
      contact_number: "+38 067 123 8765",
      stage: "new",
      stage_date: "2019-04-28 15:00:00",
      extra_info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      createdAt: "2019-04-28 16:00:00",
      updatedAt: "2019-04-28 16:00:00",
      Course_id: 4,
      Teacher_id: 2,
      Client_id: 4,
      Employee_concluded_id: 2
    }, {
      contact_number: "+38 067 555 8125",
      stage: "contract_signed",
      stage_date: "2019-04-13 12:00:00",
      extra_info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      createdAt: "2019-04-13 12:00:00",
      updatedAt: "2019-04-13 12:00:00",
      Course_id: 2,
      Teacher_id: 3,
      Client_id: 5,
      Employee_concluded_id: 2
    }, {
      contact_number: "+38 067 222 7654",
      stage: "contract_signed",
      stage_date: "2019-04-11 13:00:00",
      extra_info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      createdAt: "2019-04-11 13:00:00",
      updatedAt: "2019-04-11 13:00:00",
      Course_id: 3,
      Teacher_id: 3,
      Client_id: 10,
      Employee_concluded_id: 3
    }, {
      contact_number: "+38 067 321 9183",
      stage: "payment",
      stage_date: "2019-05-02 19:00:00",
      extra_info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      createdAt: "2019-05-02 19:00:00",
      updatedAt: "2019-05-02 19:00:00",
      Course_id: 5,
      Teacher_id: 4,
      Client_id: 5,
      Employee_concluded_id: 3
    }, {
      contact_number: "+38 067 222 7654",
      stage: "payment",
      stage_date: "2019-05-02 19:00:00",
      extra_info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      createdAt: "2019-05-02 19:00:00",
      updatedAt: "2019-05-02 19:00:00",
      Course_id: 5,
      Teacher_id: 4,
      Client_id: 3,
      Employee_concluded_id: 3
    }, {
      contact_number: "+38 067 777 1234",
      stage: "success",
      stage_date: "2019-04-16 15:00:00",
      extra_info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      createdAt: "2019-04-16 15:00:00",
      updatedAt: "2019-04-16 15:00:00",
      Course_id: 3,
      Teacher_id: 3,
      Client_id: 7,
      Employee_concluded_id: 1
    }, {
      contact_number: "+38 067 666 1123",
      stage: "success",
      stage_date: "2019-04-18 12:00:00",
      extra_info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
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
