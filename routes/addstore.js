var fs = require('fs');




exports.view = function(req, res){
  res.render('addstore');
};

exports.update = function(req, res){
  /**
  var datafile = fs.readFileSync('data.json');
  var test = JSON.parse(datafile);
  console.log(test);
  */
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
  var mapImage = req.body['mapImage']
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
                  "mapImage" : mapImage,
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
}