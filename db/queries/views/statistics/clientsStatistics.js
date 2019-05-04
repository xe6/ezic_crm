// Quantity of clients who enrolled, has gone or now studying for the last 6 month
const clientsStatiscs = `
    create or replace view \`clients_statistics\` as
        select ifnull(t.q, 0) as clients_quantity, ifnull(t.status, 'active') as status, month
        from (select count(*) as q, status,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH from clients.createdAt) , '%m')) as month_name
        from clients
        where (createdAt BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        ) AND CURDATE())
        and clients.status='active'
        group by status, month_name ) as t right join months on t.month_name = months.month

        UNION ALL

        select ifnull(t.q, 0) as clients_quantity, ifnull(t.status, 'enrolled') as status, month
        from (select count(*) as q, status,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH from clients.createdAt) , '%m')) as month_name
        from clients
        where (createdAt BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        ) AND CURDATE())
        and clients.status='enrolled'
        group by status, month_name ) as t right join months on t.month_name = months.month

        UNION ALL

        select ifnull(t.q, 0) as clients_quantity, ifnull(t.status, 'gone') as status, month
        from (select count(*) as q, status,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH from clients.createdAt) , '%m')) as month_name
        from clients
        where (createdAt BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        ) AND CURDATE())
        and clients.status='gone'
        group by status, month_name ) as t right join months on t.month_name = months.month;
`;

module.exports = clientsStatiscs;