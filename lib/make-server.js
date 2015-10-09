var ejs            = require('ejs'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    session        = require('express-session'),
    express        = require('express');

module.exports = function () {
  var server = express();

  server.set('views', './views');
  server.set('view engine', 'ejs');

  server.use(session({
    secret: "DontLookAtMySecrets",
    resave: false,
    saveUninitialized: true
  }));

  server.use(express.static('./public'));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(methodOverride('_method'));

  return server;
};