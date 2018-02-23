var data = require("../data.json");

exports.view = function(req, res){
  res.render('map', data);
};

exports.getPopups = function(req, res) {
  var datafile = fs.readFileSync('sampleData.json');
  var test = JSON.parse(datafile);
  
  var popupArray = test.bookstore[0].popups;
  res.json({"popupArray" : popupArray});
};

