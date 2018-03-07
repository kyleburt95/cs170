var data = require("../places.json");

exports.view = function(req, res){
  res.render('places', data);
};

exports.search = function(req, res){
	var places = data.places;
	var filteredPlaces = places;
	for (var key in req.query){
		if (key === "name"){
			var name = req.query.name.toLowerCase();
			//filteredBookstores = filteredBookstores.filter(bookstore => bookstore.name.toLowerCase().indexOf(name) !== -1);
			filteredPlaces = filteredPlaces.filter(function(place) {
				return place.name.toLowerCase().indexOf(name) !== -1;
			})
		}
		else {
			var value = req.query[key].toLowerCase();
			//filteredBookstores = filteredBookstores.filter(bookstore => bookstore[key].toLowerCase() === value);
			filteredPlaces = filteredPlaces.filter(function(place) {
				return place[key].toLowerCase() === value;
			})
		}
	}
	res.render('places', {"places" : filteredPlaces});
}