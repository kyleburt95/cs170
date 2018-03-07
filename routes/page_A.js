
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('page_A');
};

function initializePage() {
	// your code here
	$(document).ready(function() {
      $("#searchbtn").click(function(){
        e.preventDefault();
        ga('create','UA-114623091-2','auto');
        ga('send', 'event', 'Search', 'click');
        ga('send', 'pageview');
      });
    });
}