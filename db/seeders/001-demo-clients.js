'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Clients", [{
      contact_name: "Merle Patrick",
      phone_number: "+1-202-555-0168",
      email: "merle.patrick@demo.com",
      status: "potencial",
      createdAt: "2019-04-29 12:38:31",
      updatedAt: "2019-04-29 12:38:31"
    }, {
      contact_name: "Howard	Townsend",
      phone_number: "+1-202-555-0135",
      email: "howard.townsend@demo.com",
      status: "enrolled",
      createdAt: "2019-02-18 15:43:29",
      updatedAt: "2019-02-18 15:43:29"
    }, {
      contact_name: "Wilbur	Salazar",
      phone_number: "+1-202-555-0155",
      email: "wilbur.salazar@demo.com",
      status: "gone",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
    }, {
      contact_name: "Gabriel Rivera",
      phone_number: "+44 1632 960600",
      email: "gabriel.rivera@demo.com",
      status: "beneficial",
      createdAt: "2018-06-07 11:20:17",
      updatedAt: "2018-06-07 11:20:17"
    }, {
      contact_name: "Ebony Nunez",
      phone_number: "+61 1900 654 321",
      email: "ebony.nunez@demo.com",
      status: "active",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"
    },{
      contact_name: "Genevieve Mcbride",
      phone_number: "+1-613-555-0111",
      email: "genevieve.mcbride@demo.com",
      status: "potencial",
      createdAt: "2019-04-29 12:38:31",
      updatedAt: "2019-04-29 12:38:31"
    }, {
      contact_name: "Kara	Daniels",
      phone_number: "+1-613-555-0172",
      email: "kara.daniels@demo.com",
      status: "enrolled",
      createdAt: "2019-02-18 15:43:29",
      updatedAt: "2019-02-18 15:43:29"
    }, {
      contact_name: "Becky Woods",
      phone_number: "+1-613-555-0167",
      email: "becky.woods@demo.com",
      status: "gone",
      createdAt: "2019-01-03 10:13:23",
      updatedAt: "2019-01-03 10:13:23"
    }, {
      contact_name: "Andy	Park",
      phone_number: "+44 1632 960600",
      email: "andy.park@demo.com",
      status: "beneficial",
      createdAt: "2018-06-07 11:20:17",
      updatedAt: "2018-06-07 11:20:17"
    }, {
      contact_name: "Hugh	Bryant",
      phone_number: "+44 1632 960763",
      email: "hugh.bryant@demo.com",
      status: "active",
      createdAt: "2018-08-21 14:17:23",
      updatedAt: "2018-08-21 14:17:23"}], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Clients", null, {});
  }
};
