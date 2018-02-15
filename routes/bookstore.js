var data = require("../data.json");

exports.view = function(req, res){
<<<<<<< HEAD
  res.render('bookstore');
=======
  res.render('bookstore', data);
>>>>>>> 3dd1729237c5cf925cedfbc61673f7008c94390a
};