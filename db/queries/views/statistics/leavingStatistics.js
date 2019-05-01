export const leavingStatistics = `
    delimiter //
    create or replace view 'leaving_statistics' as
        select count(*) as gone_quantity, reason from clientReasons
        inner join clients on clients.id = clientReasons.Client_id
        inner join leavingReasons on Reason_id = leavingReasons.id
        group by reason;
    //
`;