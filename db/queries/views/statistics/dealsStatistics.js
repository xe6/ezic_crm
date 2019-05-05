// Quantity of success and new deals of the company for the last 6 months
const dealsStatistics = `
    create or replace view \`Deals_statistics\` as
        SELECT IFNULL(stage, 'new') AS stage, IFNULL(quantity, 0), MONTH FROM Sum_new_deals
        RIGHT JOIN Months ON Sum_new_deals.month_name = Months.month

        UNION ALL

        SELECT IFNULL(stage, 'new') AS stage, IFNULL(quantity, 0), MONTH FROM Sum_success_deals
        RIGHT JOIN Months ON Sum_success_deals.month_name = Months.month;
`;

module.exports = dealsStatistics;