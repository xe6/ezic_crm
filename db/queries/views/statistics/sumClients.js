const sumActiveClients = `
    CREATE OR REPLACE VIEW \`sumActiveClients\` AS         
        SELECT COUNT(*) AS quantity, STATUS,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Clients.createdAt) , '%m')) AS month_name
        FROM Clients
        WHERE (Clients.createdAt BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        ) AND CURDATE())
        AND Clients.status='active'
        GROUP BY STATUS,MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Clients.createdAt) , '%m')) 
`;

const sumEnrolledClients = `
    CREATE OR REPLACE VIEW \`sumEnrolledClients\` AS         
        SELECT COUNT(*) AS quantity, STATUS,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Clients.createdAt) , '%m')) AS month_name
        FROM Clients
        WHERE (Clients.createdAt BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        ) AND CURDATE())
        AND Clients.status='enrolled'
        GROUP BY STATUS,MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Clients.createdAt) , '%m')) 
`;

const sumGoneClients = `
    CREATE OR REPLACE VIEW \`sumGoneClients\` AS         
        SELECT COUNT(*) AS quantity, STATUS,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Clients.createdAt) , '%m')) AS month_name
        FROM Clients
        WHERE (Clients.createdAt BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        ) AND CURDATE())
        AND Clients.status='gone'
        GROUP BY STATUS,MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Clients.createdAt) , '%m')) 
`;

module.exports.sumActiveClients = sumActiveClients;
module.exports.sumEnrolledClients = sumEnrolledClients;
module.exports.sumGoneClients = sumGoneClients;