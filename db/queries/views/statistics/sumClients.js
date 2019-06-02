const sumActiveClients = `
    create or replace view \`Sum_active_clients\` AS         
        SELECT COUNT(*) AS quantity, STATUS,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Clients.createdAt) , '%m')) AS month_name
        FROM Clients
        WHERE (Clients.createdAt BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 12 MONTH)
        ) AND CURDATE()+1)
        AND Clients.status='active'
        GROUP BY STATUS,MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Clients.createdAt) , '%m')) 
`;

const sumEnrolledClients = `
    create or replace view \`Sum_enrolled_clients\` AS         
        SELECT COUNT(*) AS quantity, STATUS,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Clients.createdAt) , '%m')) AS month_name
        FROM Clients
        WHERE (Clients.createdAt BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 5 MONTH)
        ) AND CURDATE()+1)
        AND Clients.status='enrolled'
        GROUP BY STATUS,MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Clients.createdAt) , '%m')) 
`;

const sumGoneClients = `
    create or replace view \`Sum_gone_clients\` AS         
        SELECT COUNT(*) AS quantity, STATUS,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Clients.createdAt) , '%m')) AS month_name
        FROM Clients
        WHERE (Clients.createdAt BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 12 MONTH)
        ) AND CURDATE()+1)
        AND Clients.status='gone'
        GROUP BY STATUS,MONTHNAME(STR_TO_DATE(EXTRACT(MONTH FROM Clients.createdAt) , '%m')) 
`;

module.exports.sumActiveClients = sumActiveClients;
module.exports.sumEnrolledClients = sumEnrolledClients;
module.exports.sumGoneClients = sumGoneClients;