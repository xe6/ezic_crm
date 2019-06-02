'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'ClientReasons', {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        Client_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "Clients",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        },
        Reason_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "LeavingReasons",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ClientReasons')
  },
};