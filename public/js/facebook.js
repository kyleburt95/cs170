// profile_name = "";
// profile_picture = "";


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    window.top.location = "/index";
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
    if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
         // window.top.location = "#";

}
}
function changeUser(response) {
	console.log(response);
  var profile_name = response.name;

  var profile_picture = response.picture.data.url;

	console.log(profile_name);
  console.log(profile_picture);
	$('.facebookLogin').hide();


 // 	$("#fbName").text("whatevername");
 	// $("#fbPhoto").attr("src", response.picture.data.url);
	// $("#photo").attr("src", response.picture.data.url)

  //$.post('/userProfile', profile_name, profile_picture);
}

