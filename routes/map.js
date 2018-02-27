var data = require("../data.json");
var fs = require('fs');

exports.view = function(req, res){
  res.render('map', data);
};

exports.getPopups = function(req, res) {
  var datafile = fs.readFileSync('data.json');
  var test = JSON.parse(datafile);
  
  var popupArray = test.bookstores[1].popups;
  res.json({"popupArray" : popupArray});
};

