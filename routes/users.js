let express = require('express');

let router = express.Router();

let routesDebug = require('./init');

/* GET users listing. */
router.get('/', function(req, res, next) {
  routesDebug('Visited Users route');
  res.send('respond with a resource');
});

module.exports = router;
