exports.view = function(req, res){
  // var charu = req.body['store'];
  res.render('storeProfile');
};

var fs = require('fs');
exports.update = function(req, rest) {
	var storename = req.body['storename'];
}

