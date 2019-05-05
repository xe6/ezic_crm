const sumNewDeals = `
CREATE OR REPLACE VIEW \`Sum_new_deals\` AS       
    SELECT stage, COUNT(*) AS quantity,
    MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Deals.createdAt) , '%m')) AS month_name
    FROM Deals
    WHERE (Deals.stage_date BETWEEN (
    SELECT DATE_SUB(CURDATE(), INTERVAL 12 MONTH)
    ) AND CURDATE())
    AND Deals.stage='new'
    GROUP BY stage, month_name
    ORDER BY stage;
`;

const sumSuccessDeals = `
CREATE OR REPLACE VIEW \`Sum_success_deals\` AS       
    SELECT stage, COUNT(*) AS quantity,
    MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Deals.createdAt) , '%m')) AS month_name
    FROM Deals
    WHERE (Deals.stage_date BETWEEN (
    SELECT DATE_SUB(CURDATE(), INTERVAL 12 MONTH)
    ) AND CURDATE())
    AND Deals.stage='success'
    GROUP BY stage, month_name
    ORDER BY stage;
`;

module.exports.sumNewDeals = sumNewDeals;
module.exports.sumSuccessDeals = sumSuccessDeals;