// Quantity of clients who enrolled, has gone or now studying for the last 6 month
const clientsStatiscs = `
    create or replace view \`Clients_statistics\` as
        SELECT IFNULL(QUANTITY,0) as quantity, IFNULL(STATUS, 'active') as STATUS, MONTH
        FROM Sum_active_clients RIGHT JOIN Months ON Sum_active_clients.month_name = Months.month

        UNION ALL

        SELECT IFNULL(QUANTITY,0), IFNULL(STATUS, 'enrolled') as STATUS, MONTH
        FROM Sum_enrolled_clients RIGHT JOIN Months ON Sum_enrolled_clients.month_name = Months.month

        UNION ALL

        SELECT IFNULL(QUANTITY,0), IFNULL(STATUS, 'gone') as STATUS, MONTH
        FROM Sum_gone_clients RIGHT JOIN Months ON Sum_gone_clients.month_name = Months.month
`;

module.exports = clientsStatiscs;