const foodController = require('../../controllers/foodController');

module.exports = (app) =>{
    app.get('/feedNow',foodController.feedNow);
    app.get('/tankAmount',foodController.getTankAmount);
    app.get('/plateAmount',foodController.getPlateAmount);
};
