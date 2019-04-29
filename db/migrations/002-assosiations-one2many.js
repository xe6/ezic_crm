'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            "Deals",
            'Course_id', //foreign key should in single quotes and in upper case
            {
                type: Sequelize.INTEGER,
                references: {
                    model: "Courses",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL"
            }
        )
        .then(() => {
            return queryInterface.addColumn(
                "Deals",
                'Teacher_Id', //foreign key should in single quotes and in upper case
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: "Teachers",
                        key: "id"
                    },
                    onUpdate: "CASCADE",
                    onDelete: "SET NULL"
                }
            )
        })
        .then(() => {
            return queryInterface.addColumn(
                "Deals",
                'Client_Id', //foreign key should in single quotes and in upper case  
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: "Clients",
                        key: "id"
                    },
                    onUpdate: "CASCADE",
                    onDelete: "SET NULL"
                }
            )   
        })
        .then(() => {
            return queryInterface.addColumn(
                "Deals",
                'Employee_concluded_id', //foreign key should in single quotes and in upper case  
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: "Users",
                        key: "id"
                    },
                    onUpdate: "CASCADE",
                    onDelete: "SET NULL"
                }
            )   
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            "Deals",
            "Course_Id"
        )
        .then(() => {
            return queryInterface.removeColumn(
                "Deals",
                "Teacher_Id"
            )   
        })
        .then(() => {
            return queryInterface.removeColumn(
                "Deals",
                "Client_Id"
            )
        })
        .then(() => {
            return queryInterface.removeColumn(
                "Deals",
                "Employee_concluded_Id"
            )
        })
    }
}