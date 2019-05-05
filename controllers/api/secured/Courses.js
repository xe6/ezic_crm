const Controller = require("../../Controller");

class Courses extends Controller {
    async getAll(req, res) {
        let courses = false;
        try {
            courses = await this.DB.Course.findAll();
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
