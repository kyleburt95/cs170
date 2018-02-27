var descriptions = require('../data.json');


exports.view = function(req, res){

  console.log(req.body['hiddenName'])

 res.render('storeProfile', {
    'projects': [
      { 'name': req.body['hiddenName'],
        'phoneNumber': req.body['hiddenPhoneNumber'],
        'hours': req.body['hiddenStoreHours']
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

