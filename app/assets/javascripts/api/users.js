function createUser(username, age, callback) {
  $.ajax({
    url: '/api/users',
    dataType: 'json',
    contentType: 'application/json',
    method: 'POST',
    headers: {
      'Authorization': window.localStorage.getItem('uuid')
    },
    data: JSON.stringify({
      data: {
        username: username,
        age: age
      }
    }),
    success: function(data) {
      window.localStorage.setItem('user.id', data.data.id);
      window.localStorage.setItem('user.uuid', data.data.uuid);

      callback();
    },
    error: function(error) {
      showAlert(error.responseJSON.errors.join(', '));
    }
  })
}
