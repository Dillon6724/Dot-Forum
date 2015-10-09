var express   = require('express'),
	PORT      = process.env.PORT || 3000,
	server    = express(),
	MONOGOURI = process.env.MONGOLAB_URI || "mongodb://localhost:27017"
	mongoose  = require('mongoose'),
	dbname    = 'useful name';


server.get('/super-secret-test', function (req, res) {
	res.write("Welcome to my app");
	res.end()
});


mongoose.connect(MONOGOURI + '/' + dbname);

server.listen(PORT, function() {
	console.log("SERVER IS UP:", PORT)
});