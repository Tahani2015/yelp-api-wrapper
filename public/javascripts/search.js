/**
 * Created by jake on 2/26/15.
 */
var search = function () {
    console.log('javascript');
    //if ( == 'development') {
    //    $.get('/search/term=food&location=San+Francisco', function (data) {
    //        console.log(data);
    //    });
    //} else {
        $.get('https://rocky-everglades-5328.herokuapp.com/search/term=food&location=San+Francisco', function (data) {
            console.log(data);
        });
    //}
};