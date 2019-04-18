const Controller = require('./Controller');

class Home extends Controller {
    index(req, res) {
        res.end('Hello World!');
    }
}

module.exports = new Home();