/**
 * Created by jake on 2/26/15.
 */
var search = function (term, location) {
    $.get('/search/term=' + term + '&location=' + location, function (data) {
        //var results = JSON.parse(JSON.stringify(data));
        console.log(data);
        //$.get('/templates/search_results.jade', function(template) {
        //
        //    // render the template
        //    var html = jade.render(template, { items: results });
        //
        //    $('#search_results').html(html);
        //})
    });
};
$('#search_button').on('click', function (event) {
    search($('#search_term').val(), $('#search_location').val());
});
