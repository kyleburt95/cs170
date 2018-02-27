exports.view = function(req, res){
  var storeData = req.body;
  res.render('storeProfile', storeData);
};

var fs = require('fs');
exports.update = function(req, rest) {
	var storename = req.body['storename'];
}

