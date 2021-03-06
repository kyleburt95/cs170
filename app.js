
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var multer = require('multer');
var fs = require('fs');
var upload = multer({dest: 'staticassets/'})
var handlebars = require('express3-handlebars')

var page_A = require('./routes/page_A');
var login = require('./routes/login');
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
var help = require('./routes/help');
var userProfile = require('./routes/userProfile');

var addToMap = require('./routes/addToMap');
var page_B = require('./routes/page_B');
var places = require('./routes/places');
var signup = require('./routes/signup');



// Example route
// var user = require('./routes/user');

var app = express();

//multer file storage
/**
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './staticassets');
  },
  filename: function(req, file, callback) {
    callback(null,Date.now() + file.originalName);
  }
});
var upload = multer({storage : storage}).single('myFile');
*/




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
app.use(express.static( 'staticassets'));

/**
var multer = require('multer');
var upload = multer({dest: 'a/'});
app.use(upload);
*/

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.view);
app.get('/login', login.view);
app.get('/department', department.view);
app.get('/userProfile', userProfile.view);
app.get('/page_A', page_A.view);
app.get('/addstore', addstore.view);
app.post('/addstore/update', upload.single('map'), function(req, res, next) {
   
  console.log(req.file);
  var placesfile = fs.readFileSync('places.json');
  var places = JSON.parse(placesfile);
  
  var storename = req.body['storename'];
  var category = req.body['storetype'];
  var phonenumber = req.body['phonenumber'];
  var storetype = req.body['storetype'];
  var storehours = req.body['storehours'];
  var pricerange = req.body['pricerange'];
  var address = req.body['address'];
  var accessibility = req.body['accessibility'];
  //console.log(storetype);
  //console.log(storename);
  
  //get filename from multer request
  //console.log(req.file);
  //var mapName = req.file.filename;
  
  var newStore = {"name" : storename,
                  'category' : category,
                  "phoneNumber" : phonenumber,
                  "storehours" : storehours,
                  "priceRange" : pricerange,
                  "address" : address,
                  "storePhotos" : "http://mctrealestategroup.com/wp-content/uploads/2017/04/Verbatim-Bookstore.jpg",
                  "accessibilityRating" : accessibility,
                  "popups" : []
                 };
  
  //test[storetype].push(newStore);
  places['places'].push(newStore);
  /**
  fs.writeFile('data.json', JSON.stringify(test, null, 2), function(err){
    console.log("error");
  })
  */
  fs.writeFile('places.json', JSON.stringify(places, null, 2), function(err){
    console.log("places error")
  })
});

app.get('/bookstore', bookstore.view);
app.get('/bookstore/search', bookstore.search);
app.get('/categories', categories.view);
app.get('/clothing', clothing.view);
app.get('/grocery', grocery.view);
app.get('/hardware', hardware.view);
app.get('/history', history.view);
app.get('/map', map.view);
app.get('/sporting', sporting.view);
app.get('/help', help.view);
app.get('/addToMap', addToMap.view);
app.post('/addToMap/update', addToMap.update);
app.get('/map/getPopups', map.getPopups);
//app.post('/addstore/update', addstore.update);

app.get('/storeProfile', storeProfile.view)
app.post('/storeProfile', storeProfile.view);

app.get('/page_B', page_B.view);
app.get('/places', places.view);
app.get('/places/search', places.search);
app.get('/signup', signup.view);

// app.get('/bookstore', bookstore.search);

// app.post('/storeProfile', storeProfile.update);



// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
