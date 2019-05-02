// import { clientsStatiscs } from "./db/queries/views/statistics/clientsStatistics";
// import { dealsStatistics } from "./db/queries/views/statistics/dealsStatistics";
// import { leavingStatistics } from "./db/queries/views/statistics/leavingStatistics";
// import { managerStatistics } from "./db/queries/views/statistics/managerStatistics";
// import { rivalsStatistics } from "./db/queries/views/statistics/rivalsStatistics";

module.exports.createViews = function(){
    sequelize.query(`${clientsStatiscs}`);
    sequelize.query(`${dealsStatistics}`);
    sequelize.query(`${leavingStatistics}`);
    sequelize.query(`${managerStatistics}`);
    sequelize.query(`${rivalsStatistics}`);
}