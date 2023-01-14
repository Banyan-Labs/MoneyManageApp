const router = require('express').Router();
const apiRoutes = require('./api');
const config = require('../configs');

if (config.NODE_ENV === 'test') {
  router.get('/', (req, res, next) => {
    res.status(200).json({ message: 'Hello world!' });
    next();
  });
}

router.use('/api', apiRoutes);

module.exports = router;
