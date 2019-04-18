const model = require(`../db/models`);

class Controller {
    constructor() {
        this.DB = model;
    }
}

module.exports = Controller;