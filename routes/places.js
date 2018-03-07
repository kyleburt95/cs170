var data = require("../places.json");

exports.view = function(req, res){
  res.render('places', data);
};