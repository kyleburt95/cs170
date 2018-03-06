
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('page_A');
};

function initializePage() {
	// your code here
	$("#searchbtn").click(function(){
		ga('create','UA-114623091-2','auto');
		ga('send', 'event', 'Search', 'click');
	});
}