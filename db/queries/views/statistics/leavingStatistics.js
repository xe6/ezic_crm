// Quantity of clients who leaves the courses by different reasons
const leavingStatistics = `
    create or replace view \`Leaving_statistics\` as
        select count(*) as gone_quantity, reason from ClientReasons
        inner join Clients on Clients.id = ClientReasons.Client_id
        inner join LeavingReasons on Reason_id = LeavingReasons.id
        group by reason;
`;

module.exports = leavingStatistics;