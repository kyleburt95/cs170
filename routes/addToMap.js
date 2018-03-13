var data = require("../places.json");
var fs = require('fs');
//var datafile = fs.readFileSync('newData.json');
//var test = JSON.parse(datafile);
//console.log(test);

exports.view = function(req, res){
        var mapImage = req.query.hiddenMapImage;
        var address = req.query.hiddenAddress;
        //console.log(mapImage);
		res.render('addToMap', {'data' : [
          {
            "mapImage" : mapImage,
            "address" : address
          }
        ]});
		//logIn();
	};

exports.update = function(req, res) {
  //get data.json
  var datafile = fs.readFileSync('places.json');
  var test = JSON.parse(datafile);
  
  //get latitude and longitude of 
  var latitude = req.body['lat'];
  var longitude = req.body['lng'];
  var popupText = req.body['popupText'];
  var address = req.body['address'];
  var newPopup = {"latitude" : latitude, "longitude" : longitude, "popupText" : popupText};
  for(storeCategory in test) {
    var array = test[storeCategory];
    //console.log(array);
    for (var i = 0; i < array.length; i++) {      
      if(array[i].address == address) {
        array[i].popups.push(newPopup);
        
      }
      
    }
    
  }
  
  //test.bookstores[1].popups.push(newPopup);
  //var test = JSON.parse();
  //console.log(data);
  
  //console.log(req.body);
  //console.log(req.body['popupText']);
  fs.writeFile('places.json', JSON.stringify(test, null, 2), function(err){
    console.log('anyth')
  });
}


