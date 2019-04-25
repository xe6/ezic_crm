module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'TeacherCourses',
        {
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          Teacher_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Teachers",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
        },
          Course_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Courses",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
          }
        }
      );
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('TeacherCourses');
    },
  };