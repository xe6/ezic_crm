module.exports = {
    up: (queryInterface, Sequelize) => {
      // Product belongsToMany Tag
      return queryInterface.createTable(
        'teacher_courses',
        {
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          teacherId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
          },
          courseId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
          },
        }
      );
    },
  
    down: (queryInterface, Sequelize) => {
      // remove table
      return queryInterface.dropTable('teacher_courses');
    },
  };