var url = "https://api.github.com/users/twhitacre";
var button = $('makeRequest');

//get around api limits
// $.ajaxSetup({
// 	headers: {

// 		'Authorization': 'token fbkejfbsdkjfbsakjdfbksjadfbdas'
// 	}
// });

//Template

var templateStr = $('#userTemplate').html();
var templateFun = _.template(templateStr);

var request = function () {
	$.getJSON(url)
	.done( function (data) {
		$('.userInfo').html(templateFun(data));
	})
	.fail( function () {
		console.log('Request Failed');
	});
};


button.on('click', function () {
	request();
});