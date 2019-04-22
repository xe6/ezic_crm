const Controller = require("../Controller");

//=====================BCRYPT======================
const bcrypt = require("bcrypt");
const saltRounds = 10;
//=====================BCRYPT======================

class Auth extends Controller {
  async register(req, res) {
    const alreadyExists = await this.DB.User.findOne({
      where: {
        login: req.body.login
      }
    });

    if (alreadyExists) {
      return res.status(400).json({
        success: false,
        message: "Failed to create account. Such account already exists"
      });
    }

    // Hashing password
    let passwordHash = await bcrypt.hash(req.body.password, saltRounds);

    const user = {
      login: req.body.login,
      password: passwordHash,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    };

    const created = await this.DB.User.create(user);

    if(created){
      return res.status(201).json({
        success: true,
        message: `Account ${created.login} was created`
      })
    }

    //In case the instance was not created

    return res.status(500).json({
      success: false,
      message: "Server error occurred"
    })
  }
}

module.exports = new Auth();
