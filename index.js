/*
 * GET store page.
 */

var data = require("/data.json");


exports.view = function(req, res) {
console.log(data[0]);
res.render('index', {data});
};