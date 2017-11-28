var path = require('path')
var console = require('tracer').colorConsole();

module.exports = function(app) {
	// frontend routes =========================================================
	// route to handle all angular requests

	app.get('/', function(req, res) {
		return res.render('home', {title:"Ask VetBot a question"});
	});

};