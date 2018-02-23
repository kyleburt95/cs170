var data = require("../data.json");
var fs = require('fs');
//var datafile = fs.readFileSync('newData.json');
//var test = JSON.parse(datafile);
//console.log(test);

exports.view = function(req, res){
        var mapImage = req.query.mapImage;
		res.render('addToMap', {'mapImage' : mapImage});
		//logIn();
	};

exports.update = function(req, res) {
  //fs.appendFile('../newData.json', "Hello" , function (err) {
  //if (err) throw err;
  //console.log('Replaced!');
  var datafile = fs.readFileSync('sampleData.json');
  var test = JSON.parse(datafile);
  console.log(test);
  
  var latitude = req.body['lat'];
  var longitude = req.body['lng'];
  var tag = req.body['tag'];
  var popupText = req.body['popupText'];
  
  var newPopup = {"latitude" : latitude, "longitude" : longitude, "tag" : tag, "popupText" : popupText};
  test.bookstores[1].popups.push(newPopup);
  //var test = JSON.parse();
  //console.log(data);
  
  //console.log(req.body);
  //console.log(req.body['popupText']);
  fs.writeFile('sampleData.json', JSON.stringify(test, null, 2), function(err){
    console.log('anyth')
  });
}


