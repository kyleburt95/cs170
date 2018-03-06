var data = require("../data.json");

exports.view = function(req, res){
	res.render('bookstore', data);
};

exports.search = function(req, res){
	var q = req.query.q.toLowerCase();
	var bookstores = data.bookstores;
	var filteredBookstores = data.bookstores.filter(bookstore => bookstore.name.toLowerCase().indexOf(q) !== -1);
	res.render('bookstore', {"bookstores" : filteredBookstores});
}