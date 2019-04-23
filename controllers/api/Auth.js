const Controller = require("../Controller");
const jwt = require("jsonwebtoken");

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

    if (created) {
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

  async login(req, res) {
    let acceptedLogin = req.body.login;
    let acceptedPassword = req.body.password;

    const account = await this.DB.User.findOne({
      where: {
        login: acceptedLogin
      }
    });

    if (!account) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    let passIsValid = await bcrypt.compare(acceptedPassword, account.password);

    if (passIsValid) {
      let token = jwt.sign({
        login: acceptedLogin,
        id: account.id,
        firstName: account.firstName,
        lastName: account.lastName
      },
        process.env.JWT_SECRET,
        {
          expiresIn: '24h' // expires in 24 hours
        }
      );

      //Return the token
      return res.json({
        success: true,
        message: "Successfully logged in",
        data: {
          id: account.id,
          login: account.login,
          firstName: account.firstName,
          lastName: account.lastName
        },
        token
      })
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      })
    }
  }

  async whoami(req, res) {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.json({
            success: false,
            message: 'Token is not valid'
          });
        } else {
          return res.json({
            success: true,
            data: decoded
          })
        }
      });
    } else {
      return res.json({
        success: false,
        message: 'Auth token is not supplied'
      });
    }
  }
}

module.exports = new Auth();
