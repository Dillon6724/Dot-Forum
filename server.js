
var mongoose = require('mongoose'),
    server   = require('./lib/make-server')(),
    Schema = mongoose.Schema,
    verifyLogIn = function (req, res, next) {
    	if (req.session.currentUser){
    		next();
    	} else {
    		res.redirect(302, "/");
    	}
    },
    renderRoute = function (req, res, route) {
    	Thread.find({}, function (err, allThreads) {
			if (!err){
				res.render('category-index/' + route + '-index', {
					allThreads: allThreads
				});
			} else {
				console.log(err);
			};
		});
    };

/////////////////////      MONGOOSE     ///////////////////
var userSchema = new Schema({
	username: String,
	password: String
}),
	threadSchema = new Schema({
	title: String,
	post: String,
	tags: [String],
	author: String,
	likes: Number
}),

var User = mongoose.model('user', userSchema);
var Thread = mongoose.model('thread', threadSchema);

mongoose.connect('mongodb://localhost:27017/fourm');


///////////////     POSTS AND GETS FOR FORMS     //////////////////

server.post('/users', function (req, res) {
	var attempt = req.body.user

	User.findOne({ username : attempt.username}, function (err, user) {
		var message;

		if (user && user.password === attempt.password) {
			req.session.currentUser = user.username;
			res.redirect(301, '/topics/categories')
		} else {
			res.redirect(301, '/')
		}
	
	})

})

     ////// adding user into user db ///////
server.post('/users/new', function (req, res) {
	var userInfo = req.body.user
	req.session.currentUser = user.username;

	var newUser = new User(userInfo);

	newUser.save(function (err, order) {
		if (!err) {
			res.redirect(302, '/topics/categories')
		} else {
				console.log(err);
		};
	});
});

server.post('/threads/new', function (req, res) {
	var threadInfo = req.body.thread,
		newThread = new Thread(threadInfo);

	req.body.thread.author = req.session.currentUser;

	newThread.save(function (err, order) {
		if (!err) {
			res.redirect(302, '/topics/categories')
		} else {
				console.log(err);
		};
	});
})

server.post('/logout', function (req, res) {
	req.session.currentUser = null;
	res.redirect(301, '/')
})

///////////////////////     FORMS     ////////////////////////
server.get('/', function (req, res) {
	res.render('welcome', {});
})

server.get('/users/new', function (req, res) {
	res.render('users/new', {});
})

server.get('/topics/categories', verifyLogIn, function (req, res) {
	res.render('topics/category')
})


/////////////     LINKS  TO INDEXES     ///////////////
server.get('/thread/:id', function (req, res) {
	Thread.findById(req.params.id, function (err, specificThread) {
		if (!err) {
			res.render('threads/show', {
				thread: specificThread
			});
		} else {
			console.log(err);
		};
	});
});

server.get('/categories/entertainment', verifyLogIn, function (req, res) {
	renderRoute( req, res, 'entertainment')
});

server.get('/categories/politics', verifyLogIn, function (req, res) {
	renderRoute( req, res, 'politics')
});

server.get('/categories/science-technology', verifyLogIn, function (req, res) {
	renderRoute( req, res, 'science-technology')
});

server.get('/categories/nonsense', verifyLogIn, function (req, res) {
	renderRoute( req, res, 'nonsense')
});

server.get('/categories/other', verifyLogIn, function (req, res) {
	renderRoute( req, res, 'other')
});

server.get('/threads/new', verifyLogIn, function (req, res) {
	res.render('threads/new')
})
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

server.listen(3000, function() {console.log('DONT GET STRESSED IT WILL WORK EVENTUALLY')})
