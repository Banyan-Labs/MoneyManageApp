// ! error in path '../../money-managed-app/Client/src/App' doesn't exist
// //  const { default: App } = require("../../money-managed-app/Client/src/App");
const router = require('express').Router();
const Controller = require('../controllers/user.controller');

router.post('/api/register', Controller.registerNewUser);
router.post('/api/login', Controller.loginUser);

module.exports = router;

/**
 * ! old exports has errors
 module.exports = (app) => {
   app.post('/api/register', Controller.checkDuplicateEmail);
 };
 * ! applying this route to server and pinging '/api/register' returns output below 
 * TypeError: app.post is not a function
    at module.exports (D:\GitRepos\MoneyManageApp\server\src\routes\user.routes.js:6:7)
    at Layer.handle [as handle_request] (D:\GitRepos\MoneyManageApp\node_modules\express\lib\router\layer.js:95:5)
    at trim_prefix (D:\GitRepos\MoneyManageApp\node_modules\express\lib\router\index.js:328:13)
    at D:\GitRepos\MoneyManageApp\node_modules\express\lib\router\index.js:286:9
    at Function.process_params (D:\GitRepos\MoneyManageApp\node_modules\express\lib\router\index.js:346:12)
    at next (D:\GitRepos\MoneyManageApp\node_modules\express\lib\router\index.js:280:10)
    at urlencodedParser (D:\GitRepos\MoneyManageApp\node_modules\body-parser\lib\types\urlencoded.js:91:7)
    at Layer.handle [as handle_request] (D:\GitRepos\MoneyManageApp\node_modules\express\lib\router\layer.js:95:5)
    at trim_prefix (D:\GitRepos\MoneyManageApp\node_modules\express\lib\router\index.js:328:13)
    at D:\GitRepos\MoneyManageApp\node_modules\express\lib\router\index.js:286:9
 */
