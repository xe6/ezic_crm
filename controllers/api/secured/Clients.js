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
}

module.exports = new Clients();
