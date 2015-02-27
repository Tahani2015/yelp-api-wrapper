var express = require('express');
var qs = require('qs');
var router = express.Router();

/* GET home page. */
router.get('/:query', function(req, res) {
    var yelp = req.app.locals.yelp;
    var query = qs.parse(req.params.query);
    query.limit = 1;
    yelp.search(query, function (error, data) {
        if (error) {
            console.log(error);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;
