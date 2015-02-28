var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:query', function(req, res) {
    var yelp = req.app.locals.yelp;
    var query = req.params.query;
    console.log(query);
    yelp.business(query, function (error, data) {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;
