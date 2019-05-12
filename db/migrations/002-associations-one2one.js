module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Teachers', // name of Source model
            'Course_id', // name of the key we're adding 
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Courses', // name of Target model
                    key: 'id', // key in Target model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }
        )
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Teachers', // name of Source model
            'Course_id' // key we want to remove
        )
    }
};