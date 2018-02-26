var descriptions = require('../data.json');


exports.view = function(req, res){
  // var charu = req.body['store'];
  res.render('storeProfile');
};
// 
// var fs = require('fs');

exports.update = function(req, res) {
	// var storename = req.body['storename'];

	res.json(descriptions);


};

