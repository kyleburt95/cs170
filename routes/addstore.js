var fs = require('fs');

exports.view = function(req, res){
  res.render('addstore');
};

exports.update = function(req, res){
  var datafile = fs.readFileSync('data.json');
  var test = JSON.parse(datafile);
  console.log(test);
  
  var storename = req.body['storename'];
  var phonenumber = req.body['phonenumber'];
  var storetype = req.body['storetype'];
  var storehours = req.body['storehours'];
  var pricerange = req.body['pricerange'];
  var address = req.body['address'];
  var accessibility = req.body['accessibility'];
  //console.log(storetype);
  //console.log(storename);
  
  var newStore = {"name" : storename,
                  "phoneNumber" : phonenumber,
                  "storehours" : storehours,
                  "PriceRange" : pricerange,
                  "address" : address,
                  "storePhotos" : "http://mctrealestategroup.com/wp-content/uploads/2017/04/Verbatim-Bookstore.jpg",
                  "accesibilityRating" : accessibility,
                  "mapImage" : "bookstoreBlack.png",
                  "popups" : []
                 };
  
  test[storetype].push(newStore);
  
  fs.writeFile('data.json', JSON.stringify(test, null, 2), function(err){
    console.log("error");
  })
}