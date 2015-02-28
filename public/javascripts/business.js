/**
 * Created by jake on 2/26/15.
 */

var business = function (name) {
    $.get('/business/' + name, function (data) {
    	console.log(data);

        // var results = JSON.parse(JSON.stringify(data));

            // render the template
            // var html = jade.render(template, { items: results });

            // $('#search_results').html(html);
    });
};

$('#business_button').on('click', function (event) {
    business($('#name').val());
});