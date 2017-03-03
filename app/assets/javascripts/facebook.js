//load FB JS SDK asynchronously
(function(d, s, id) {
  var js,
      fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//FB ready function
window.fbAsyncInit = function() {
FB.init({
  appId      : '386021998432942',
  cookie     : true,  // enable cookies to allow the server to access
                      // the session
  xfbml      : true,  // parse social plugins on this page
  version    : 'v2.8' // use graph api version 2.8
});}


$(document).on('turbolinks:load', function() {

  $('#token_transfer_link').click(function(evt) {
    evt.preventDefault();
    var token = FB.getAccessToken();
    if (token) {
      window.location = $(evt.target).attr('href') + '?token=' + token;
    }
  });

  $('#login-link').click(function(evt) {
    evt.preventDefault();

    //launch the FB login flow yourself
    FB.login(function(response) {
      var token = FB.getAccessToken();
        if (token) {
          window.location =
          $(evt.target).attr('href') + '?token=' + token;
        } else {
          console.error("Please login to Facebook!");
        }
      },
      {scope: 'public_profile,email,user_friends'}
    );
  });
});
