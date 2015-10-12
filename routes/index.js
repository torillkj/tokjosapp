var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Torill' });
});

router.get('/store', function (req, res) {
  //res.send('Store is handled');
	res.render('index', { title: 'Store' });
});

module.exports = router;
