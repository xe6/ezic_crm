const Controller = require("../../Controller");

class Clients extends Controller {
    async getAll(req, res) {
        let clients = false;
        try {
            clients = await this.DB.Client.findAll();
        } catch (err) {
            return res.status(500).json({
                success: false,
                error: err.message,
                data: null
            });
        }

        if (clients) {
            return res.json({
                success: true,
                data: clients
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

module.exports = new Clients();
