const { default: App } = require("../../money-managed-app/Client/src/App");

const Controller = require('../controllers/user.controller');




module.exports = app => {
    app.patch("/api/Register", Controller.checkDuplicateEmail)
   
}