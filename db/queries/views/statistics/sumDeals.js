const sumNewDeals = `
    create view if not exists \`Sum_new_deals\` AS       
        SELECT stage, COUNT(*) AS quantity,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Deals.createdAt) , '%m')) AS month_name
        FROM Deals 
        INNER JOIN DealsDynamics ON Deals.id = DealsDynamics.Deal_id
        WHERE (DealsDynamics.stage_date BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 5 MONTH)
        ) AND CURDATE())
        AND DealsDynamics.stage='new'
        GROUP BY stage, month_name
        ORDER BY stage;
`;

const sumSuccessDeals = `
    create view if not exists \`Sum_success_deals\` AS       
        SELECT stage, COUNT(*) AS quantity,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Deals.createdAt) , '%m')) AS month_name
        FROM Deals
        INNER JOIN DealsDynamics ON Deals.id = DealsDynamics.Deal_id
        WHERE (DealsDynamics.stage_date BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 5 MONTH)
        ) AND CURDATE())
        AND DealsDynamics.stage='success'
        GROUP BY stage, month_name
        ORDER BY stage;
`;

module.exports.sumNewDeals = sumNewDeals;
module.exports.sumSuccessDeals = sumSuccessDeals;