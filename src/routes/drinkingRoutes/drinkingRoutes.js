const waterController = require('../../controllers/waterController');

module.exports = (app) =>{
    app.get('/waterStatus',waterController.getWaterLevel);
    app.get('/waterTankAmount',waterController.getFloatingStatus);
};