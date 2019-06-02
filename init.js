let sumClients = require("./db/queries/views/statistics/sumClients");
let sumDeals = require("./db/queries/views/statistics/sumDeals");
let clientsStatiscs = require("./db/queries/views/statistics/clientsStatistics");
let dealsStatistics = require("./db/queries/views/statistics/dealsStatistics");
let leavingStatistics = require("./db/queries/views/statistics/leavingStatistics");
let managerStatistics = require("./db/queries/views/statistics/managerStatistics");
let rivalsStatistics = require("./db/queries/views/statistics/rivalsStatistics");
let dealsInsertion = require("./db/queries/triggers/dealsTrigger");

let db = require("./db/models/index");

module.exports.createViews = function(){
    db.sequelize.query(`${sumClients.sumActiveClients}`);
    db.sequelize.query(`${sumClients.sumEnrolledClients}`);
    db.sequelize.query(`${sumClients.sumGoneClients}`);
    db.sequelize.query(`${sumDeals.sumNewDeals}`);
    db.sequelize.query(`${sumDeals.sumSuccessDeals}`);
    db.sequelize.query(`${clientsStatiscs}`);
    db.sequelize.query(`${dealsStatistics}`);
    db.sequelize.query(`${leavingStatistics}`);
    db.sequelize.query(`${managerStatistics}`);
    db.sequelize.query(`${rivalsStatistics}`);
    db.sequelize.query(`${dealsInsertion}`);
}