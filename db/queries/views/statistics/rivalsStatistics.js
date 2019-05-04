// Average sum of rival's course prices
const rivalsStatistics = `
    create or replace view \`average_rivals_prices\` as
        select course_name, AVG(price_per_month) as avg_sum from rivals
        group by course_name
        order by avg_sum;
`;

module.exports = rivalsStatistics;