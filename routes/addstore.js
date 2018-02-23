var fs = require('fs');

exports.view = function(req, res){
  res.render('addstore');
};

exports.update = function(req, res){
  var datafile = fs.readFileSync('sampleData.json');
  var test = JSON.parse(datafile);
  console.log(test);
  
  var storename = req.body['storename'];
  var phonenumber = req.body['phonenumber'];
  var storetype = req.body['storetype'];
  //console.log(storetype);
  //console.log(storename);
  
  var newStore = {"storename" : storename, "phonenumber" : phonenumber, "storetype" : storetype};
  
  test.storetype.push(newStore);
  
  fs.writeFile('sampleData.json', JSON.stringify(test, null, 2), function(err){
    console.log("error");
  })
}