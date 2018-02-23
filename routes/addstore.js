var fs = require('fs');

exports.view = function(req, res){
  res.render('addstore');
};

exports.update = function(req, res){
  var datafile = fs.readFileSync('sampleData.json');
  var test = JSON.parse(datafile);
  
  var storename = req.body['storename'];
  var phonenumber = req.body['phonenumber'];
}