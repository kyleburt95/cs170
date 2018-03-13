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
		// sorting is done by setting sortOn = the field to sort on and sortOrder = asc for ascending, or !asc for descending order
		else if (key === "sortOn" || key === "sortOrder") {
			var sortOn = req.query.sortOn ? req.query.sortOn : "accessibilityRating"; // default to accessibilityRating if sortOn is not set
			var sortOrder = req.query.sortOrder ? req.query.sortOrder : "asc"; // default to asc for ascending order
			filteredPlaces = filteredPlaces.sort(function(a, b) {
				console.log("in sort: " + sortOn + ", " + sortOrder);
				if (a[sortOn] < b[sortOn]){
					return sortOrder === "asc" ? -1 : 1;
				}
				else if (a[sortOn] === b[sortOn]){
					return 0;
				}
				else {
					return sortOrder === "asc" ? 1 : -1;
				} 
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
// newUrl = window.location + '?' + window.location.search + 'category=' + filter