// Quantity of success deals made by each manager for the last 3 month
const managerStatistcs = `
    create view if not exists \`Manager_statistics\` as
        SELECT COUNT(*) AS deals_quantity,
        CONCAT(firstName,' ', lastName) AS fio       
        FROM Deals 
        JOIN DealsDynamics ON Deals.id = DealsDynamics.Deal_id
        JOIN Users ON Deals.Employee_concluded_id = Users.id
        WHERE (DealsDynamics.stage_date BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        ) AND CURDATE())
        AND stage='success'
        GROUP BY Users.id;
`;

module.exports = managerStatistcs;