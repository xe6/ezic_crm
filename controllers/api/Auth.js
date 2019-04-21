const Controller = require("../Controller");

class Auth extends Controller {
  register(req, res) {
      res.json({
          data: "Here will be Register User logic"
      })
  }
}

module.exports = new Auth();
