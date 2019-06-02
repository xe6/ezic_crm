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

    async add(req, res) {
        const teacher = {
            fio: req.body.fio,
            contact_info: req.body.contact,
            salary: req.body.salary
        };

        const created = await this.DB.Teacher.create(teacher);

        if (created) {
            return res.status(201).json({
                success: true,
                message: `Teacher record was added`
            });
        }

        //In case the instance was not created

        return res.status(500).json({
            success: false,
            message: "Server error occurred"
        })
    }
}

module.exports = new Teachers();
