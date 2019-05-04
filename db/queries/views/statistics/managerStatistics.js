// Quantity of success deals made by each manager for the last 3 month
const managerStatistcs = `
    create or replace view \`Manager_statistics\` as
        select count(*) as deals_quantity,
                concat(firstName,' ', lastName) as fio
        from Deals join Users on Deals.Employee_concluded_id = Users.id
        where (Deals.stage_date BETWEEN (
            SELECT DATE_SUB(CURDATE(), INTERVAL 3 MONTH)
            ) AND CURDATE())
        and stage='success'
        group by Users.id;
`;

module.exports = managerStatistcs;