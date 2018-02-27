var descriptions = require('../data.json');


exports.view = function(req, res){
  // var charu = req.body['store'];
  // res.render('storeProfile');



  var storeData = req.body;
  console.log(storeData);

  storeName = storeData['name'];

  console.log(storeName);

  var name = storeName['name'];
  // console.log(storeData['name']);
  //res.render('storeProfile', storeData);



   res.render('storeProfile', {
    'projects': [
      { 'name': 'ok',
        'phoneNumber': '(619)501-7466',
        'hours': 'Mon - Fri: 10:00 - 7:00'
      }
    ]  
  });


  // res.send(storeData);
  // res.render('storeProfile', storeData);

  // res.redirect('storeProfile', storeData);
};

// exports.update = function(req, rest) {
// 	var storeData = req.body;

// 	console.log(storeData);

// 	res.render('storeProfile', storeData);
// };
// 
// var fs = require('fs');

// exports.update = function(req, res) {
// 	// var storename = req.body['storename'];

// 	var storeData = req.body;
// 	res.render('storeProfile', storeData);

// };

