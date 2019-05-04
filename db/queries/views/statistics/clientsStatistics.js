// Quantity of clients who enrolled, has gone or now studying for the last 6 month
const clientsStatiscs = `
    create or replace view \`Clients_statistics\` as
        SELECT IFNULL(QUANTITY,0) as quantity, IFNULL(STATUS, 'active') as STATUS, MONTH
        FROM sumActiveClients RIGHT JOIN Months ON sumActiveClients.month_name = Months.month

        UNION ALL

        SELECT IFNULL(QUANTITY,0), IFNULL(STATUS, 'active') as STATUS, MONTH
        FROM sumEnrolledClients RIGHT JOIN Months ON sumEnrolledClients.month_name = Months.month

        UNION ALL

        SELECT IFNULL(QUANTITY,0), IFNULL(STATUS, 'active') as STATUS, MONTH
        FROM sumGoneClients RIGHT JOIN Months ON sumGoneClients.month_name = Months.month
`;

module.exports = clientsStatiscs;