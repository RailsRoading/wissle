$(document).ready(function() {
  $('#form-user').submit(function(e) {
    e.preventDefault();

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
          username: $(this).children('[name=username]').val(),
          age: $(this).children('[name=age]').val()
        }
      }),
      success: function(data) {
        window.localStorage.setItem('user.id', data.data.id);
        window.localStorage.setItem('user.uuid', data.data.uuid);
      },
      error: function(error) {
        showAlert(error);
      }
    })

  });
});
