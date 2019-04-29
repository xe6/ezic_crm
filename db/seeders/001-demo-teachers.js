'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Teachers", [{
      fio: "Terrell	Smith Ross",
      contact_info: "+36 55 291 123",
      salary: "40000",
      createdAt: "2017-01-01 16:21:31",
      updatedAt: "2017-01-01 16:21:31"
    }, {
      fio: "Nadine Bailey",
      contact_info: "nadie.bailey@demo.com",
      salary: "30000",
      createdAt: "2017-02-02 18:11:31",
      updatedAt: "2017-02-02 18:11:31"
    }, {
      fio: "Leah Barker",
      contact_info: "leah.barker@test.io",
      salary: "50000",
      createdAt: "2017-04-04 17:31:31",
      updatedAt: "2017-04-04 17:31:31"
    }, {
      fio: "Rene Perkins",
      contact_info: "+36 22 881 322",
      salary: "35000",
      createdAt: "2017-08-06 20:41:31",
      updatedAt: "2017-08-06 20:41:31"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Teachers", null, {});
  }
};
