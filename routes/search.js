var express = require('express');
var qs = require('qs');
var router = express.Router();

var yelp = require("node-yelp").createClient({
    oauth: {
        consumer_key: 'UWobTMG9B3mAW5FXp-PNaw',
        consumer_secret: 'gi95WHKwfVe6IUodPU9c1Ks2_Vs',
        token: '4W6L2n8dIF3gC2-VHYnnojDvZg42ulRv',
        token_secret: 'I7uZw5CErSd0my2gS3s5-FohMcs'
    }
});

/* GET home page. */
router.get('/:query', function(req, res, next) {
    console.log(qs.toString());
    var query = req.params['query'];
    console.log('here: ' + qs.parse(query));
    yelp.search(qs.parse(query), function (error, data) {
        console.log(error);
        console.log(data);
    });
});

module.exports = router;
