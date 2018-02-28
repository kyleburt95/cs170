var descriptions = require('../data.json');


exports.view = function(req, res){

  // var charu = req.body['store'];
  // res.render('storeProfile');
  console.log(req.body['hiddenName'])

 res.render('storeProfile', {
    'projects': [
      { 
        'storePhotos' : req.body['hiddenStorePhotos'],
        'name': req.body['hiddenName'],
        'phoneNumber': req.body['hiddenPhoneNumber'],
        'storeHours': req.body['hiddenStoreHours'],
        'priceRange' : req.body['hiddenPriceRange'],
        'address' : req.body['hiddenAddress'],
        'accesibilityRating' : req.body['hiddenAccesibilityRating'],
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

