var descriptions = require('../data.json');


exports.view = function(req, res){
  // var charu = req.body['store'];
  // res.render('storeProfile');

  var storeData = req.body;

  var test = "HELLO";
  console.log(storeData);
  res.render('storeProfile', {data: storeData});
};
// 
// var fs = require('fs');

// exports.update = function(req, res) {
// 	// var storename = req.body['storename'];

// 	var storeData = req.body;
// 	res.render('storeProfile', storeData);

// };

