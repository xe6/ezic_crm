// Quantity of success and new deals of the company for the last 6 months
const dealsStatistics = `
    create or replace view \`Deals_statistics\` as
        select ifnull(stage, 'new') as stage, ifnull(q, 0) as deals_quantity, month from (
        select stage, count(*) as q,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH from Deals.createdAt) , '%m')) as month_name
        from Deals
        where (Deals.stage_date BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        ) AND CURDATE())
        and Deals.stage='new'
        group by stage, month_name
        order by stage
        ) as t
        right join Months on t.month_name = Months.month

        UNION ALL

        select ifnull(stage, 'success') as stage, ifnull(q, 0) as deals_quantity, month from (
        select stage, count(*) as q,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH from Deals.createdAt) , '%m')) as month_name
        from Deals
        where (Deals.stage_date BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        ) AND CURDATE())
        and Deals.stage='success'
        group by stage, month_name
        order by stage
        ) as t
        right join Months on t.month_name = Months.month;
`;

module.exports = dealsStatistics;