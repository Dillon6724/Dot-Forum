
var mongoose = require('mongoose'),
    server   = require('./lib/make-server')();



server.get('/', function (req, res) {
	res.render('welcome', {});
})

server.get('/users/new', function (req, res) {
	res.render('users/new', {});
})

server.get('/topics/categories', function (req, res) {
	res.render('topics/category')
})


/////////////     LINKS  TO INDEXES     ///////////////
server.get('/categories/entertainment', function (req, res) {
	res.render('category-index/entertainment-index')
})

server.get('/categories/politics', function (req, res) {
	res.render('category-index/politics-index')
})

server.get('/categories/science-technology', function (req, res) {
	res.render('category-index/science-technology-index')
})

server.get('/categories/nonsense', function (req, res) {
	res.render('category-index/nonsense-index')
})

server.get('/categories/other', function (req, res) {
	res.render('category-index/other-index')
})

server.get('/threads/new', function (req, res) {
	res.render('threads/new')
})
///////////////////////////////////////////////////////






server.listen(3000, function() {console.log('DONT GET STRESSED IT WILL WORK EVENTUALLY')})




/////////////////////////      LISTNING AND HEROKU      /////////////////////////
////////////////////////////////////////////////////////////////////////////////


// server.get('/super-secret-test', function (req, res) {
// 	res.write("Welcome to my app");
// 	res.end()
// });


// mongoose.connect(MONOGOURI + '/' + dbname);

// server.listen(PORT, function() {
// 	console.log("SERVER IS UP:", PORT)
// });