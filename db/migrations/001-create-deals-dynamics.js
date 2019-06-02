'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('DealsDynamics', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            stage: {
                type: Sequelize.ENUM("new", "contract_signed", "payment", "success"),
                defaultValue: "success"
            },
            stage_date: {
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', {
                raw: true
            })
            .then(queryInterface.dropTable("DealsDynamics"));
    }
};