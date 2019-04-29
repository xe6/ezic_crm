const Controller = require("../../Controller");

class Teachers extends Controller {
    async getAll(req, res) {
        let teachers = false;
        try {
            teachers = await this.DB.Teacher.findAll();
        } catch (err) {
            return res.status(500).json({ 
                success: false,
                error: err.message,
                data: null
            });
        }

        if (teachers) {
            return res.json({
                success: true,
                data: teachers
            });
        }
        return res.status(404).json({ 
            success: false,
            error: "No Data available",
            data: null
        });
    }
}

module.exports = new Teachers();
