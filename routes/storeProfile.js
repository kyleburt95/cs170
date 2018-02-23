exports.view = function(req, res){
  var charu = req.body['store'];
  res.render('storeProfile');
};


