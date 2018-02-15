
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var department = require('./routes/department');
var addstore  = require('./routes/addstore');
var bookstore  = require('./routes/bookstore');
var categories  = require('./routes/categories');
var clothing  = require('./routes/clothing');
var grocery = require('./routes/grocery');
var hardware = require('./routes/hardware');
var history = require('./routes/history');
var map = require('./routes/map');
var sporting = require('./routes/sporting');
var storeProfile = require('./routes/storeProfile');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/department', department.view);
app.get('/addstore', addstore.view);
app.get('/bookstore', bookstore.view);
app.get('/categories', categories.view);
app.get('/clothing', clothing.view);
app.get('/grocery', grocery.view);
app.get('/hardware', hardware.view);
app.get('/history', history.view);
app.get('/map', map.view);
app.get('/sporting', sporting.view);
app.get('/storeProfile', storeProfile.view);



// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});