/**
 * Created by jake on 2/26/15.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:query', function(req, res) {
    var yelp = req.app.locals.yelp;
    var query = req.params.query;
    yelp.business(query, function (error, data) {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;
