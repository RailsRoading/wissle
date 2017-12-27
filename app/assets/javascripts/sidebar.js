$(function() {
  var url = 'api/users/' + window.localStorage.getItem('user.id');
  $.ajax({
    url: url,
    dataType: 'json',
    contentType: 'application/json',
    method: 'GET',
    headers: {
      'Authorization': window.localStorage.getItem('user.uuid')
    },

    success: function(data) {
      var userinfo = data.data.username + ', ' + data.data.age;
      insertUserInfo(userinfo);
      setInputValue();
    },
    error: function(error) {
      handleApiError(error);
    }
  });

  // initial page settings
  $("#sidebar").hide();
  $(".overlay").hide();
  $("#userinput").hide();

  // Accept username/age changes
  $("#check").click(function() {
    EditUserInfo($("#usernameInput").val(), $("#ageInput").val());
    toggleUserInput();
  });

  // Cancel username/age changes
  $("#cancel").click(function() {
    toggleUserInput();
    setInputValue();
  });
});

function insertUserInfo(userinfo) {
  $("#userinfo").empty();
  $("#userinfo").append(userinfo + ' <span><i class="fa fa-pencil" onclick="toggleUserInput()"></i></span>');
}

function setInputValue() {
  $('#usernameInput').val(window.localStorage.getItem('user.username'));
  $('#ageInput').val(window.localStorage.getItem('user.age'));
}

function toggleMenu() {
  $("#sidebar").toggle();
  $(".overlay").toggle();
}

function toggleUserInput() {
  $("#userinfo").toggle();
  $("#userinput").toggle();
}

function EditUserInfo(username, age) {
  var url = 'api/users/' + window.localStorage.getItem('user.id');
  $.ajax({
    url: url,
    dataType: 'json',
    contentType: 'application/json',
    method: 'PUT',
    headers: {
      'Authorization': window.localStorage.getItem('user.uuid')
    },
    data: JSON.stringify({
      data: {
        username: username,
        age: age
      }
    }),
    success: function(data) {
      window.localStorage.setItem('user.username', data.data.username);
      window.localStorage.setItem('user.age', data.data.age);
      var userinfo = data.data.username + ', ' + data.data.age;
      insertUserInfo(userinfo);
      setInputValue();
    },
    error: function(error) {
      handleApiError(error);
    }
  });
}
