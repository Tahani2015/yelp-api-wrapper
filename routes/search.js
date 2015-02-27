var express = require('express');
var qs = require('qs');
var router = express.Router();
var request = require('request');

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
    var query = req.params['query'];
    request('http://www.google.com', function (error, response, body) {
        //console.log('Error: ' + error);
        //console.log('Response: ' + response);
        //console.log('Body: ' + body);
    });
    var stuff = yelp.search(qs.parse(query), function (error, data) {
        console.log('got here');
        //console.log(error);
        //console.log(data);
    });
    console.log(stuff);
});

module.exports = router;
