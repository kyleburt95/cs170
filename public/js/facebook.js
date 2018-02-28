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
    window.top.location = "/index";
  }
}

function changeUser(response) {
  // console.log(response);
  $(".facebookLogin").hide();

  var profile_name = response.name;
  var profile_picture = response.picture.data.url;
  localStorage.setItem("current_user", profile_name);
  localStorage.setItem("current_user_pic", profile_picture);
  console.log(response.name);
  console.log(profile_picture);

  // $.post('/userProfile', {"profile_name": profile_name, "profile_picture": profile_picture});

  // $("#name").text(response.name);
  // $("#photo").attr("src", response.picture.data.url);
}



// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//     // window.top.location = "/index";
//   });
// }

// function statusChangeCallback(response) {
//   console.log('Facebook login status changed.');
//   console.log(response);
//   if (response.status === 'connected') {
//     // Logged into your app and Facebook.
//     console.log('Successfully logged in with Facebook');
//     FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
//     window.top.location = "/index";

//        }
//      }

// function changeUser(response) {
// console.log(response);
//   var profile_name = response.name;
//   var profile_picture = response.picture.data.url;

//  $(".facebookLogin").hide();

//  // $("#fbName").text("whatevername");
//  // $("#fbPhoto").attr("src", response.picture.data.url);
//  // $("#photo").attr("src", response.picture.data.url)

//   $.post('/userProfile', {"profile_name": profile_name, "profile_picture": profile_picture});
// }

