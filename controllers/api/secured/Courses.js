const Controller = require("../../Controller");
const COURSES_DATA = require("../../../db/queries/items").COURSES_DATA;

class Courses extends Controller {
    async getAll(req, res) {
        let courses = false;
        try {
            courses = await this.DB.sequelize.query(COURSES_DATA);
        } catch (err) {
            return res.status(500).json({ 
                success: false,
                error: err.message,
                data: null
            });
        }

        if (courses) {
            return res.json({
                success: true,
                data: courses
            });
        }
        return res.status(404).json({ 
            success: false,
            error: "No Data available",
            data: null
        });
    }
}

module.exports = new Courses();
