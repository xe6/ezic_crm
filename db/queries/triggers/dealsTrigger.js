// Auto insertion in table DealsDynamics w/ fk on new deal
const dealsInsertion = `
    CREATE OR REPLACE TRIGGER \`autoinsertion_in_deals_dynamics\` 
    AFTER INSERT ON Deals 
    FOR EACH ROW 
    BEGIN
        INSERT INTO DealsDynamics(Deal_id, stage_date, createdAt, updatedAt) 
        VALUES(NEW.id, NEW.createdAt, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
    END;
`;

module.exports = dealsInsertion;