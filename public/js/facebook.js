function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    window.top.location = "/index";
  });
  // window.location('/index');
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
    if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);

}
}

function changeUser(response) {
	console.log(response)
	// window.location('/index');
	$('.facebookLogin').hide();
	// $("#name").text(response.name);
	// $("#photo").attr("src", response.picture.data.url)
}