// Quantity of success deals made by each manager for the last 3 month
export const managerStatistcs = `
    delimiter //
    create or replace view 'manager_statistics' as
        select count(*) as deals_quantity,
                concat(firstName,' ', lastName) as fio
        from deals join users on deals.Employee_concluded_id = users.id
        where (deals.stage_date BETWEEN (
            SELECT DATE_SUB(CURDATE(), INTERVAL 3 MONTH)
            ) AND CURDATE())
        and stage='success'
        group by users.id;
    //
`;