'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("DealsDynamics", [{
            stage: "new",
            stage_date: "2018-12-12 18:00:00",
            Deal_id: 1,
            createdAt: "2018-12-12 18:00:00",
            updatedAt: "2018-12-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-01-12 18:00:00",
            Deal_id: 1,
            createdAt: "2019-01-12 18:00:00",
            updatedAt: "2019-01-12 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2019-01-12 18:00:00",
            Deal_id: 1,
            createdAt: "2019-01-12 18:00:00",
            updatedAt: "2019-01-12 18:00:00"
        }, {
            stage: "success",
            stage_date: "2019-02-10 18:00:00",
            Deal_id: 1,
            createdAt: "2019-02-10 18:00:00",
            updatedAt: "2019-02-10 18:00:00"
        }, {
            stage: "new",
            stage_date: "2018-06-12 18:00:00",
            Deal_id: 2,
            createdAt: "2018-06-12 18:00:00",
            updatedAt: "2018-06-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2018-07-12 18:00:00",
            Deal_id: 2,
            createdAt: "2018-07-12 18:00:00",
            updatedAt: "2018-07-12 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2018-08-22 18:00:00",
            Deal_id: 2,
            createdAt: "2018-08-22 18:00:00",
            updatedAt: "2018-08-22 18:00:00"
        }, {
            stage: "success",
            stage_date: "2018-09-10 18:00:00",
            Deal_id: 2,
            createdAt: "2018-09-10 18:00:00",
            updatedAt: "2018-09-10 18:00:00"
        }, {
            stage: "new",
            stage_date: "2018-10-12 18:00:00",
            Deal_id: 3,
            createdAt: "2018-10-12 18:00:00",
            updatedAt: "2018-10-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2018-10-22 18:00:00",
            Deal_id: 3,
            createdAt: "2018-10-22 18:00:00",
            updatedAt: "2018-10-22 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2018-10-27 18:00:00",
            Deal_id: 3,
            createdAt: "2018-10-27 18:00:00",
            updatedAt: "2018-10-27 18:00:00"
        }, {
            stage: "success",
            stage_date: "2019-01-01 18:00:00",
            Deal_id: 3,
            createdAt: "2019-01-01 18:00:00",
            updatedAt: "2019-01-01 18:00:00"
        }, {
            stage: "new",
            stage_date: "2018-12-12 18:00:00",
            Deal_id: 4,
            createdAt: "2018-12-12 18:00:00",
            updatedAt: "2018-12-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-01-12 18:00:00",
            Deal_id: 4,
            createdAt: "2019-01-12 18:00:00",
            updatedAt: "2019-01-12 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2019-01-22 18:00:00",
            Deal_id: 4,
            createdAt: "2019-01-22 18:00:00",
            updatedAt: "2019-01-22 18:00:00"
        }, {
            stage: "success",
            stage_date: "2018-02-10 18:00:00",
            Deal_id: 4,
            createdAt: "2018-02-10 18:00:00",
            updatedAt: "2018-02-10 18:00:00"
        }, {
            stage: "new",
            stage_date: "2018-12-12 18:00:00",
            Deal_id: 5,
            createdAt: "2018-12-12 18:00:00",
            updatedAt: "2018-12-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-01-12 18:00:00",
            Deal_id: 5,
            createdAt: "2019-01-12 18:00:00",
            updatedAt: "2019-01-12 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2019-01-22 18:00:00",
            Deal_id: 5,
            createdAt: "2019-01-22 18:00:00",
            updatedAt: "2019-01-22 18:00:00"
        }, {
            stage: "success",
            stage_date: "2018-02-10 18:00:00",
            Deal_id: 5,
            createdAt: "2018-02-10 18:00:00",
            updatedAt: "2018-02-10 18:00:00"
        }, {
            stage: "new",
            stage_date: "2018-12-12 18:00:00",
            Deal_id: 6,
            createdAt: "2018-12-12 18:00:00",
            updatedAt: "2018-12-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-01-12 18:00:00",
            Deal_id: 6,
            createdAt: "2019-01-12 18:00:00",
            updatedAt: "2019-01-12 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2019-01-22 18:00:00",
            Deal_id: 6,
            createdAt: "2019-01-22 18:00:00",
            updatedAt: "2019-01-22 18:00:00"
        }, {
            stage: "success",
            stage_date: "2018-02-10 18:00:00",
            Deal_id: 6,
            createdAt: "2018-02-10 18:00:00",
            updatedAt: "2018-02-10 18:00:00"
        }, {
            stage: "new",
            stage_date: "2018-06-12 18:00:00",
            Deal_id: 7,
            createdAt: "2018-06-12 18:00:00",
            updatedAt: "2018-06-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2018-07-12 18:00:00",
            Deal_id: 7,
            createdAt: "2018-07-12 18:00:00",
            updatedAt: "2018-07-12 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2018-07-22 18:00:00",
            Deal_id: 7,
            createdAt: "2018-07-22 18:00:00",
            updatedAt: "2018-07-22 18:00:00"
        }, {
            stage: "success",
            stage_date: "2018-08-01 18:00:00",
            Deal_id: 7,
            createdAt: "2018-08-01 18:00:00",
            updatedAt: "2018-08-01 18:00:00"
        }, {
            stage: "new",
            stage_date: "2018-10-12 18:00:00",
            Deal_id: 8,
            createdAt: "2018-10-12 18:00:00",
            updatedAt: "2018-10-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2018-11-12 18:00:00",
            Deal_id: 8,
            createdAt: "2018-11-12 18:00:00",
            updatedAt: "2018-11-12 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2018-11-25 18:00:00",
            Deal_id: 8,
            createdAt: "2018-11-25 18:00:00",
            updatedAt: "2018-11-25 18:00:00"
        }, {
            stage: "success",
            stage_date: "2018-11-16 18:00:00",
            Deal_id: 8,
            createdAt: "2018-11-16 18:00:00",
            updatedAt: "2018-11-16 18:00:00"
        }, {
            stage: "new",
            stage_date: "2018-09-12 18:00:00",
            Deal_id: 9,
            createdAt: "2018-09-12 18:00:00",
            updatedAt: "2018-09-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2018-09-22 18:00:00",
            Deal_id: 9,
            createdAt: "2018-09-22 18:00:00",
            updatedAt: "2018-09-22 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2018-10-22 18:00:00",
            Deal_id: 9,
            createdAt: "2018-10-22 18:00:00",
            updatedAt: "2018-10-22 18:00:00"
        }, {
            stage: "success",
            stage_date: "2018-11-10 18:00:00",
            Deal_id: 9,
            createdAt: "2018-11-10 18:00:00",
            updatedAt: "2018-11-10 18:00:00"
        }, {
            stage: "new",
            stage_date: "2018-12-12 18:00:00",
            Deal_id: 10,
            createdAt: "2018-12-12 18:00:00",
            updatedAt: "2018-12-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-01-12 18:00:00",
            Deal_id: 10,
            createdAt: "2019-01-12 18:00:00",
            updatedAt: "2019-01-12 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2019-01-22 18:00:00",
            Deal_id: 10,
            createdAt: "2019-01-22 18:00:00",
            updatedAt: "2019-01-22 18:00:00"
        }, {
            stage: "success",
            stage_date: "2018-02-10 18:00:00",
            Deal_id: 10,
            createdAt: "2018-02-10 18:00:00",
            updatedAt: "2018-02-10 18:00:00"
        }, {
            stage: "new",
            stage_date: "2019-04-21 18:00:00",
            Deal_id: 11,
            createdAt: "2019-04-21 18:00:00",
            updatedAt: "2019-04-21 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-05-01 18:00:00",
            Deal_id: 11,
            createdAt: "2019-05-01 18:00:00",
            updatedAt: "2019-05-01 18:00:00"
        }, {
            stage: "new",
            stage_date: "2019-04-21 18:00:00",
            Deal_id: 12,
            createdAt: "2019-04-21 18:00:00",
            updatedAt: "2019-04-21 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-05-01 18:00:00",
            Deal_id: 12,
            createdAt: "2019-05-01 18:00:00",
            updatedAt: "2019-05-01 18:00:00"
        },{
            stage: "new",
            stage_date: "2019-04-21 18:00:00",
            Deal_id: 13,
            createdAt: "2019-04-21 18:00:00",
            updatedAt: "2019-04-21 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-05-01 18:00:00",
            Deal_id: 13,
            createdAt: "2019-05-01 18:00:00",
            updatedAt: "2019-05-01 18:00:00"
        },{
            stage: "new",
            stage_date: "2019-05-01 18:00:00",
            Deal_id: 14,
            createdAt: "2019-05-01 18:00:00",
            updatedAt: "2019-05-01 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-05-10 18:00:00",
            Deal_id: 14,
            createdAt: "2019-05-10 18:00:00",
            updatedAt: "2019-05-10 18:00:00"
        },{
            stage: "new",
            stage_date: "2019-04-10 18:00:00",
            Deal_id: 15,
            createdAt: "2019-04-10 18:00:00",
            updatedAt: "2019-04-10 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-05-11 18:00:00",
            Deal_id: 15,
            createdAt: "2019-05-11 18:00:00",
            updatedAt: "2019-05-11 18:00:00"
        },{
            stage: "new",
            stage_date: "2019-01-12 18:00:00",
            Deal_id: 16,
            createdAt: "2019-01-12 18:00:00",
            updatedAt: "2019-01-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-01-22 18:00:00",
            Deal_id: 16,
            createdAt: "2019-01-12 18:00:00",
            updatedAt: "2019-01-12 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2019-02-01 18:00:00",
            Deal_id: 16,
            createdAt: "2019-02-01 18:00:00",
            updatedAt: "2019-02-01 18:00:00"
        }, {
            stage: "success",
            stage_date: "2019-02-10 18:00:00",
            Deal_id: 16,
            createdAt: "2019-02-10 18:00:00",
            updatedAt: "2019-02-10 18:00:00"
        },{
            stage: "new",
            stage_date: "2019-01-12 18:00:00",
            Deal_id: 17,
            createdAt: "2019-01-12 18:00:00",
            updatedAt: "2019-01-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-01-22 18:00:00",
            Deal_id: 17,
            createdAt: "2019-01-22 18:00:00",
            updatedAt: "2019-01-22 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2019-02-01 18:00:00",
            Deal_id: 17,
            createdAt: "2019-02-01 18:00:00",
            updatedAt: "2019-02-01 18:00:00"
        }, {
            stage: "success",
            stage_date: "2019-02-10 18:00:00",
            Deal_id: 17,
            createdAt: "2019-02-10 18:00:00",
            updatedAt: "2019-02-10 18:00:00"
        },{
            stage: "new",
            stage_date: "2019-03-12 18:00:00",
            Deal_id: 18,
            createdAt: "2019-03-12 18:00:00",
            updatedAt: "2019-03-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-03-22 18:00:00",
            Deal_id: 18,
            createdAt: "2019-03-22 18:00:00",
            updatedAt: "2019-03-22 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2019-04-01 18:00:00",
            Deal_id: 18,
            createdAt: "2019-04-01 18:00:00",
            updatedAt: "2019-04-01 18:00:00"
        }, {
            stage: "success",
            stage_date: "2019-04-10 18:00:00",
            Deal_id: 18,
            createdAt: "2019-04-10 18:00:00",
            updatedAt: "2019-04-10 18:00:00"
        },{
            stage: "new",
            stage_date: "2019-03-12 18:00:00",
            Deal_id: 19,
            createdAt: "2019-03-12 18:00:00",
            updatedAt: "2019-03-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-03-22 18:00:00",
            Deal_id: 19,
            createdAt: "2019-03-22 18:00:00",
            updatedAt: "2019-03-22 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2019-04-01 18:00:00",
            Deal_id: 19,
            createdAt: "2019-04-01 18:00:00",
            updatedAt: "2019-04-01 18:00:00"
        }, {
            stage: "success",
            stage_date: "2019-04-10 18:00:00",
            Deal_id: 19,
            createdAt: "2019-04-10 18:00:00",
            updatedAt: "2019-04-10 18:00:00"
        },{
            stage: "new",
            stage_date: "2019-04-12 18:00:00",
            Deal_id: 20,
            createdAt: "2019-04-12 18:00:00",
            updatedAt: "2019-04-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-04-22 18:00:00",
            Deal_id: 20,
            createdAt: "2019-04-22 18:00:00",
            updatedAt: "2019-04-22 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2019-05-01 18:00:00",
            Deal_id: 20,
            createdAt: "2019-05-01 18:00:00",
            updatedAt: "2019-05-01 18:00:00"
        }, {
            stage: "success",
            stage_date: "2019-05-10 18:00:00",
            Deal_id: 20,
            createdAt: "2019-05-10 18:00:00",
            updatedAt: "2019-05-10 18:00:00"
        },{
            stage: "new",
            stage_date: "2019-04-12 18:00:00",
            Deal_id: 21,
            createdAt: "2019-04-12 18:00:00",
            updatedAt: "2019-04-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-04-22 18:00:00",
            Deal_id: 21,
            createdAt: "2019-04-22 18:00:00",
            updatedAt: "2019-04-22 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2019-05-01 18:00:00",
            Deal_id: 21,
            createdAt: "2019-05-01 18:00:00",
            updatedAt: "2019-05-01 18:00:00"
        }, {
            stage: "success",
            stage_date: "2019-05-10 18:00:00",
            Deal_id: 21,
            createdAt: "2019-05-10 18:00:00",
            updatedAt: "2019-05-10 18:00:00"
        },{
            stage: "new",
            stage_date: "2019-04-12 18:00:00",
            Deal_id: 22,
            createdAt: "2019-04-12 18:00:00",
            updatedAt: "2019-04-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-04-22 18:00:00",
            Deal_id: 22,
            createdAt: "2019-04-22 18:00:00",
            updatedAt: "2019-04-22 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2019-05-01 18:00:00",
            Deal_id: 22,
            createdAt: "2019-05-01 18:00:00",
            updatedAt: "2019-05-01 18:00:00"
        }, {
            stage: "success",
            stage_date: "2019-05-10 18:00:00",
            Deal_id: 22,
            createdAt: "2019-05-10 18:00:00",
            updatedAt: "2019-05-10 18:00:00"
        },{
            stage: "new",
            stage_date: "2019-02-12 18:00:00",
            Deal_id: 23,
            createdAt: "2019-02-12 18:00:00",
            updatedAt: "2019-02-12 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-02-22 18:00:00",
            Deal_id: 23,
            createdAt: "2019-02-22 18:00:00",
            updatedAt: "2019-02-22 18:00:00"
        }, {
            stage: "payment",
            stage_date: "2019-03-01 18:00:00",
            Deal_id: 23,
            createdAt: "2019-03-01 18:00:00",
            updatedAt: "2019-03-01 18:00:00"
        }, {
            stage: "success",
            stage_date: "2019-03-10 18:00:00",
            Deal_id: 23,
            createdAt: "2019-03-10 18:00:00",
            updatedAt: "2019-03-10 18:00:00"
        },{
            stage: "new",
            stage_date: "2019-05-01 18:00:00",
            Deal_id: 24,
            createdAt: "2019-05-01 18:00:00",
            updatedAt: "2019-05-01 18:00:00"
        }, {
            stage: "contract_signed",
            stage_date: "2019-05-11 18:00:00",
            Deal_id: 24,
            createdAt: "2019-05-11 18:00:00",
            updatedAt: "2019-05-11 18:00:00"
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("DealsDynamics", null, {});
    }
};