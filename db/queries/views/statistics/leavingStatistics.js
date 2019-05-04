// Quantity of clients who leaves the courses by different reasons
const leavingStatistics = `
    create or replace view \`leaving_statistics\` as
        select count(*) as gone_quantity, reason from clientReasons
        inner join clients on clients.id = clientReasons.Client_id
        inner join leavingReasons on Reason_id = leavingReasons.id
        group by reason;
`;

module.exports = leavingStatistics;