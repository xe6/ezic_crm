const Controller = require("../../Controller");

class Teachers extends Controller {
    async getAll(req, res) {
        let teachers = false;
        try {
            teachers = await this.DB.Teacher.findAll();
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }

        if (teachers) {
            return res.json(teachers);
        }
        return res.status(404).json({ error: "No Data available" });
    }
}

module.exports = new Teachers();
