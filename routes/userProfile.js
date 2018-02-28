	
exports.view = function(req, res){

	var info = req.body;

	console.log(info);
	res.render('userProfile');
		//logIn();
	};