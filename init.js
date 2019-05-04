let clientsStatiscs = require("./db/queries/views/statistics/clientsStatistics");
let dealsStatistics = require("./db/queries/views/statistics/dealsStatistics");
let leavingStatistics = require("./db/queries/views/statistics/leavingStatistics");
let managerStatistics = require("./db/queries/views/statistics/managerStatistics");
let rivalsStatistics = require("./db/queries/views/statistics/rivalsStatistics");

let db = require("./db/models/index");

module.exports.createViews = function(){
    db.sequelize.query(`${clientsStatiscs}`);
    db.sequelize.query(`${dealsStatistics}`);
    db.sequelize.query(`${leavingStatistics}`);
    db.sequelize.query(`${managerStatistics}`);
    db.sequelize.query(`${rivalsStatistics}`);
}