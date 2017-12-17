$(function() {
// initial page settings
  $("#sidebar").hide();
  $("#userinput").hide();
  // Add user, temporary, fix ajax
  $("#userinfo").append('Bob, 20 <span><i class="fa fa-pencil"></i></span>');

// Toggle hamburger menu
  $("#hamburgerIcon").click(function() {
    $("#sidebar").toggle();
  });

// Edit username/age
  $(".fa-pencil").click(function(){
    $("#userinfo").hide();
    $("#userinput").show();
  });

// Accept username/age changes
  $("#check").click(function(){
    $("#userinfo").show();
    $("#userinput").hide();
  });

// Cancel username/age changes
  $("#cancel").click(function(){
    $("#userinfo").show();
    $("#userinput").hide();
  });
});

/*function getUserInfo(){
  $.ajax({
    url: '/api/users',
    dataType: 'json',
    contentType: 'application/json',
    method: 'GET',
    headers: {

    },

    success: function(data) {
      $("#userinfo").append("<p>${data.username}, ${data.age}<p>")
    },
    error: function(error) {
      showAlert(error.responseJSON.errors.join(', '));
    }
  })
}*/
