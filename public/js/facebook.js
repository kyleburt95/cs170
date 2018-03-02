function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    console.log('Successfully logged in with Facebook');
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    // window.top.location = "/index";
  }
}

function changeUser(response) {
  // console.log(response);
  $(".facebookLogin").hide();
  // console.log(response.name);
  // console.log(response.picture.data.url);
  sessionStorage.setItem("current_user", response.name);
  sessionStorage.setItem("current_user_photo", response.picture.data.url);
  window.top.location = "/page_A";
}

