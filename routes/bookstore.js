var data = require("../data.json");

exports.view = function(req, res){
	res.render('bookstore', data);
};

exports.search = function(req, res){
	var bookstores = data.bookstores;
	var filteredBookstores = bookstores;
	for (var key in req.query){
		if (key === "name"){
			var name = req.query.name.toLowerCase();
			//filteredBookstores = filteredBookstores.filter(bookstore => bookstore.name.toLowerCase().indexOf(name) !== -1);
			filteredBookstores = filteredBookstores.filter(function(bookstore) {
				return bookstore.name.toLowerCase().indexOf(name) !== -1;
			})
		}
		else {
			var value = req.query[key].toLowerCase();
			//filteredBookstores = filteredBookstores.filter(bookstore => bookstore[key].toLowerCase() === value);
			filteredBookstores = filteredBookstores.filter(function(bookstore) {
				return bookstore[key].toLowerCase() === value;
			})
		}
	}
	res.render('bookstore', {"bookstores" : filteredBookstores});
}