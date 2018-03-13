var descriptions = require('../data.json');


exports.view = function(req, res){

  console.log(req.body);

 res.render('storeProfile', {
    'projects': [
      { 
        'storePhotos' : req.body['hiddenStorePhotos'],
        'name': req.body['hiddenName'],
        'phoneNumber': req.body['hiddenPhoneNumber'],
        'storeHours': req.body['hiddenStoreHours'],
        'priceRange' : req.body['hiddenPriceRange'],
        'address' : req.body['hiddenAddress'],
        'accessibilityRating' : req.body['hiddenAccessibility'],
        'mapImage' : req.body['hiddenMapImage']

      }
    ]  
  });
}
  
// 
// var fs = require('fs');

// exports.update = function(req, res) {
// 	// var storename = req.body['storename'];

// 	var storeData = req.body;
// 	res.render('storeProfile', storeData);

// };

