var data = require("../data.json");
var fs = require('fs');

exports.view = function(req, res){
  var mapImage = req.query.hiddenMapImage;
        var address = req.query.hiddenAddress;
        console.log(mapImage);
		res.render('map', {'data' : [
          {
            "mapImage" : mapImage,
            "address" : address
          }
        ]});
};

exports.getPopups = function(req, res) {
  var datafile = fs.readFileSync('places.json');
  var test = JSON.parse(datafile);
  
  var address = req.query.address;
  
  for(storeCategory in test) {
    var array = test[storeCategory];
    //console.log(array);
    for (var i = 0; i < array.length; i++) {      
      if(array[i].address == address) {
        var popupArray = array[i].popups;
        res.json({"popupArray" : popupArray});
        break;
      }
      
    }
    
  }
  
  
};

