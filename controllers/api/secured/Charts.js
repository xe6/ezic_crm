const Controller = require("../../Controller");

class Charts extends Controller {
    async getAll(req, res) {
        let isData = false;
        let clientsStatistics = false;
        let dealsStatistics = false;
        let leavingStatistics = false;
        let managerStatistics = false;
        let averageRivalsPrices = false;
        let months = false;
        try {
            clientsStatistics = await this.DB.sequelize.query("SELECT * FROM Clients_statistics ORDER BY ord", {
                type: this.DB.sequelize.QueryTypes.SELECT
            });
            dealsStatistics = await this.DB.sequelize.query("SELECT * FROM Deals_statistics ORDER BY stage, ord", {
                type: this.DB.sequelize.QueryTypes.SELECT
            });
            leavingStatistics = await this.DB.sequelize.query("SELECT * FROM Leaving_statistics", {
                type: this.DB.sequelize.QueryTypes.SELECT
            });
            managerStatistics = await this.DB.sequelize.query("SELECT * FROM Manager_statistics", {
                type: this.DB.sequelize.QueryTypes.SELECT
            });
            averageRivalsPrices = await this.DB.sequelize.query("SELECT * FROM Average_rivals_prices", {
                type: this.DB.sequelize.QueryTypes.SELECT
            });
            months = await this.DB.sequelize.query("SELECT * FROM Months", {
                type: this.DB.sequelize.QueryTypes.SELECT
            });
            isData = true;
        } catch (err) {
            return res.status(500).json({ 
                success: false,
                error: err.message,
                data: null
            });
        }
        
        if (isData) {
            return res.json({
                success: true,
                data: {
                    clients: clientsStatistics,
                    deals: dealsStatistics,
                    leaving: leavingStatistics,
                    managers: managerStatistics,
                    rivals: averageRivalsPrices,
                    months
                }
            });
        }
        return res.status(404).json({ 
            success: false,
            error: "No Data available",
            data: null
        });
    }
}

module.exports = new Charts();
