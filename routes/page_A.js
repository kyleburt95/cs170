
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
      $("#category1").click(function(){
        e.preventDefault();
        ga('create','UA-114623091-2','auto');
        ga('send', 'event', 'category1', 'click');
        ga('send', 'pageview');
      });
      $("#category2").click(function(){
        e.preventDefault();
        ga('create','UA-114623091-2','auto');
        ga('send', 'event', 'category2', 'click');
        ga('send', 'pageview');
      });
      $("#category3").click(function(){
        e.preventDefault();
        ga('create','UA-114623091-2','auto');
        ga('send', 'event', 'category3', 'click');
        ga('send', 'pageview');
      });
      $("#category4").click(function(){
        e.preventDefault();
        ga('create','UA-114623091-2','auto');
        ga('send', 'event', 'category4', 'click');
        ga('send', 'pageview');
      });
      $("#category5").click(function(){
        e.preventDefault();
        ga('create','UA-114623091-2','auto');
        ga('send', 'event', 'category5', 'click');
        ga('send', 'pageview');
      });
      $("#category6").click(function(){
        e.preventDefault();
        ga('create','UA-114623091-2','auto');
        ga('send', 'event', 'category6', 'click');
        ga('send', 'pageview');
      });
    });
}