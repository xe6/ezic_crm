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

    async delete(req, res){
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
