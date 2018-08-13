const registrationController = require('../../controllers/registationController');

module.exports = (app) =>{
    app.get('/register', registrationController.register);
};
