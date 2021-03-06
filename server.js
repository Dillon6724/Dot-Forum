
var mongoose = require('mongoose'),
    server   = require('./lib/make-server')(),
    PORT = process.env.PORT || 3000,
    dbname = 'forum'
    MONGOURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017',
    Schema = mongoose.Schema,
    verifyLogIn = function (req, res, next) {
    	if (req.session.currentUser){
    		next();
    	} else {
    		res.redirect(302, "/");
    	}
    },
    renderRoute = function (req, res, route) {
 
    	Thread.find({}).sort({ 'likesLength': -1 }).exec(function (err, threads) {
			console.log(req.session)
			if (!err){
				res.render('category-index/' + route + '-index', {
					allThreads: threads,
					currentUser: req.session.currentUser
				});
			} else {
				console.log(err);
			};
		});	
	}

//////////////////////////      MONGOOSE     ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
var userSchema = new Schema({
	username: {type: String, requied: true, unique: true },
	password: {type: String, requied: true, unique: false },
}),
	threadSchema = new Schema({
	title: {type: String, requied: true, unique: false },
	post: {type: String, requied: true, unique: false },
	tags: {type: [String], required: true},
	author: String,
	likes: [ String ], // likes is an array of usernames...
	likesLength: Number,
	comments: [String],
	commentAuthor: [String]
});

var User = mongoose.model('user', userSchema);
var Thread = mongoose.model('thread', threadSchema);

mongoose.connect(MONGOURI + '/' + dbname);


///////////////////////////////   ROUTES    /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

server.use('/category', function (req, res, next) {
	res.locals.controller = "category";
	next()
});

server.use(function (req, res, next) {
	res.locals.controller = res.locals.controller || "default"
	next();
})


server.post('/threads/:id/like', function (req, res) {
	Thread.findById(req.params.id, function (err, thread) {
		var usernameIndex = thread.likes.indexOf(req.session.currentUser);
		thread.likesLength = thread.likes.length;

		if (usernameIndex > -1) {
			// we found the username in the thread.likes array
		} else {
			// it's not yet in there!
			thread.likes.push(req.session.currentUser);
		}

		thread.save(function (saveErr, saveThread) {
			if (!err) {
				res.redirect(302, '/thread/' + req.params.id)
			} else {
				console.log(err);
			}
		})
	});
});

server.patch('/threads/show/:id', function (req, res) {
	var threadOptions = req.body.thread

	Thread.findByIdAndUpdate(req.params.id, threadOptions, function (err, updatedThread) {
		if(!err) {
			res.redirect(302, '/thread/' + req.params.id)
		} else {
			console.log(err)
		}
	})
});

server.patch('/threads/comment/:id', function (req, res) {
	var newComment = req.body.comment,
		newAuthor = req.body.author;

	Thread.findByIdAndUpdate(req.params.id, { $push: {comments: newComment } }, function (err, updatedThread) {
		if(err) {
			console.log(err)
		} else {			Thread.findByIdAndUpdate(updatedThread._id, { $push: {commentAuthor: newAuthor } }, function (err, updatedThread) {
				if(!err) {
					res.redirect(302, '/thread/' + req.params.id)
				} else {
					console.log(err)
				}
			})
		}
	})
})


server.delete('/thread/delete/:id', function (req, res) {
	Thread.findByIdAndRemove(req.params.id, function (err) {
	    if (err) {
	      console.log(err);
	    } else {
	      res.redirect(302, '/category');
	    }
 	})
})
       ////////  POSTS  //////////

server.post('/users', function (req, res) {
	var attempt = req.body.user
	User.findOne({ username : attempt.username}, function (err, user) {
		if (user && user.password === attempt.password) {
			req.session.currentUser = user.username;
			res.redirect(301, '/category');
		} else {
			res.redirect(301, '/');
		}
	});
});

server.post('/users/new', function (req, res) {
	var userInfo = req.body.user
	req.session.currentUser = userInfo.username;
	var newUser = new User(userInfo);
	newUser.save(function (err, order) {
		if (!err) {
			res.redirect(302, '/category');
		} else {
				console.log(err);
		}
	});
});

server.post('/threads/new', function (req, res) {
	var threadInfo = req.body.thread,
		newThread = new Thread(threadInfo);

	req.body.thread.author = req.session.currentUser;

	newThread.save(function (err, thread) {
		if (!err) {
			res.redirect(302, '/thread/' + thread._id);
		} else {
				console.log(err);
		};
	});
});

server.post('/logout', function (req, res) {
	req.session.currentUser = null
	res.redirect(301, '/')
});


       ///////////  GETS   ////////////
server.get('/', function (req, res) {
	res.render('welcome', {});
});

server.get('/category', verifyLogIn, function (req, res) {
	res.render('category-index/category', {
		currentUser : req.session.currentUser
	})
});

server.get('/thread/:id', verifyLogIn, function (req, res) {
	Thread.findById(req.params.id, function (err, specificThread) {
		if (!err) {
			res.render('threads/show', {
				thread: specificThread,
				currentUser: req.session.currentUser
			});
		} else {
			console.log(err);
		};
	});
});

server.get('/thread/edit/:id', verifyLogIn, function (req, res) {
	Thread.findById(req.params.id, function (err, specificThread) {
		if (!err) {
			res.render('threads/edit-thread', {
				thread: specificThread,
				author: req.session.currentUser
			})
		} else {
			console.log(err)
		};
	});
});

server.get('/categories/:categoryName', verifyLogIn, function (req, res) {
	renderRoute(req, res, req.params.categoryName)
});

server.get('/threads/new', verifyLogIn, function (req, res) {
	res.render('threads/new', {
		author: req.session.currentUser
	});
});

/////////////////////////      LISTNING AND HEROKU      //////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

server.listen(PORT, function() {
	console.log("SERVER IS UP:", PORT);
});
