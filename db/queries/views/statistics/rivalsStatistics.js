// Average sum of rival's course prices
const rivalsStatistics = `
    create or replace view \`Average_rivals_prices\` as
        select id, course_name, AVG(price_per_month) as avg_sum from Rivals
        group by course_name
        order by avg_sum;
`;

module.exports = rivalsStatistics;