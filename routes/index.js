var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Jake\'s Yelp O-Auth Avoidance Service' });
});

module.exports = router;
