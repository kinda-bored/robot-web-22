function setRoutes(app) {
    const IndexController = require('../controllers');

    app.get('/', IndexController.getIndex);
}

module.exports = setRoutes;