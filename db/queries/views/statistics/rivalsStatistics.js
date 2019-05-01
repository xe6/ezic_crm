export const rivalsStatistics = `
    delimiter //
    create or replace view 'average_rivals_prices' as
        select course_name, AVG(price_per_month) as avg_sum from rivals
        group by course_name
        order by avg_sum;
    //
`;