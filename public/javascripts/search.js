/**
 * Created by jake on 2/26/15.
 */
var search = function () {
    $.get('/search/term=food&location=San+Francisco', function (data) {
        console.log(data);
    });
};