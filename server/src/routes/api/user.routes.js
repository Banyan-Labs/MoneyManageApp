const router = require('express').Router();
const Controller = require('../../controllers/user.controller');

router.post('/register', Controller.registerNewUser);
router.post('/login', Controller.loginUser);

module.exports = router;
