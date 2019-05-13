const Controller = require("../../Controller");
const DEALS_DATA = require("../../../db/queries/items").DEALS_DATA;

class Deals extends Controller {
    async getAll(req, res) {
        let deals = false;
        try {
            deals = await this.DB.sequelize.query(DEALS_DATA);
        } catch (err) {
            return res.status(500).json({
                success: false,
                error: err.message,
                data: null
            });
        }

        if (deals) {
            return res.json({
                success: true,
                data: deals
            });
        }
        return res.status(404).json({
            success: false,
            error: "No Data available",
            data: null
        });
    }

    async getById(req, res) {
        let id = req.params.id
        let deal = null;
        let dealDynamicData = null;


        const DEALS_DATA_BY_ID = `SELECT Deals.id AS deal_id, contact_number, extra_info, course_name, fio AS teacher, 
contact_name AS client, CONCAT(firstName, lastName) AS employee_concluded
FROM Deals
INNER JOIN Courses ON Deals.Course_id = Courses.id
INNER JOIN Teachers ON Deals.Teacher_Id = Teachers.id
INNER JOIN Clients ON Deals.Client_Id = Clients.id
INNER JOIN Users ON Deals.Employee_concluded_id = Users.id
WHERE Deals.id=${id}
ORDER BY deal_id;`;
        const DEAL_DYNAMIC_DATA = 
        `SELECT stage, stage_date FROM 
        DealsDynamics WHERE Deal_id = ${id}`;

        try {
            deal = await this.DB.sequelize.query(DEALS_DATA_BY_ID);
            dealDynamicData = await this.DB.sequelize.query(DEAL_DYNAMIC_DATA);
        } catch (err) {
            return res.status(500).json({
                success: false,
                error: err.message,
                data: null
            });
        }

        if (deal) {
            let allData = deal[0][0];
            allData.dynamic = dealDynamicData[0];
            return res.json({
                success: true,
                data: allData
            });
        }
        return res.status(404).json({
            success: false,
            error: "No Data available",
            data: null
        });
    }

    async addDynamicStepById(req, res){
        //Add Dynamic Action query
    }

    async add(req, res) {
        const client = {
            contact_name: req.body.contact,
            phone_number: req.body.phone,
            email: req.body.email,
            status: req.body.status
        };

        const created = await this.DB.Client.create(client);

        if (created) {
            return res.status(201).json({
                success: true,
                message: `Client record was added`
            });
        }

        //In case the instance was not created

        return res.status(500).json({
            success: false,
            message: "Server error occurred"
        })
    }

    async delete(req, res) {
        const deleted = await this.DB.Client.destroy({
            where: {
                id: req.body.id
            }
        });

        if (deleted) {
            return res.status(200).json({
                success: true,
                message: `Client record was deleted`
            });
        }

        //In case the instance was not deleted

        return res.status(500).json({
            success: false,
            message: "Server error occurred"
        })
    }
}

module.exports = new Deals();
