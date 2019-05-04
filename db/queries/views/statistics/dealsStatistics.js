// Quantity of success and new deals of the company for the last 6 months
const dealsStatistics = `
    create or replace view \`deals_statistics\` as
        select ifnull(stage, 'new') as stage, ifnull(q, 0) as deals_quantity, month from (
        select stage, count(*) as q,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH from deals.createdAt) , '%m')) as month_name
        from deals
        where (deals.stage_date BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        ) AND CURDATE())
        and deals.stage='new'
        group by stage, month_name
        order by stage
        ) as t
        right join months on t.month_name = months.month

        UNION ALL

        select ifnull(stage, 'success') as stage, ifnull(q, 0) as deals_quantity, month from (
        select stage, count(*) as q,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH from deals.createdAt) , '%m')) as month_name
        from deals
        where (deals.stage_date BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        ) AND CURDATE())
        and deals.stage='success'
        group by stage, month_name
        order by stage
        ) as t
        right join months on t.month_name = months.month;
`;

module.exports = dealsStatistics;