// Quantity of clients who enrolled, has gone or now studying for the last 6 month
const clientsStatiscs = `
    create or replace view \`Clients_statistics\` as
        select ifnull(t.q, 0) as clients_quantity, ifnull(t.status, 'active') as status, month
        from (select count(*) as q, status,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH from clients.createdAt) , '%m')) as month_name
        from Clients
        where (createdAt BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        ) AND CURDATE())
        and Clients.status='active'
        group by status, month_name ) as t right join Months on t.month_name = Months.month

        UNION ALL

        select ifnull(t.q, 0) as clients_quantity, ifnull(t.status, 'enrolled') as status, month
        from (select count(*) as q, status,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH from Clients.createdAt) , '%m')) as month_name
        from Clients
        where (createdAt BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        ) AND CURDATE())
        and Clients.status='enrolled'
        group by status, month_name ) as t right join Months on t.month_name = Months.month

        UNION ALL

        select ifnull(t.q, 0) as clients_quantity, ifnull(t.status, 'gone') as status, month
        from (select count(*) as q, status,
        MONTHNAME(STR_TO_DATE(EXTRACT(MONTH from Clients.createdAt) , '%m')) as month_name
        from Clients
        where (createdAt BETWEEN (
        SELECT DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        ) AND CURDATE())
        and Clients.status='gone'
        group by status, month_name ) as t right join Months on t.month_name = Months.month;
`;

module.exports = clientsStatiscs;