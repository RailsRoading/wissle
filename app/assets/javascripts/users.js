function createUser() {
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
        username: 'Florian',
        age: '23'
      }
    }),
    success: function(data) {
      window.localStorage.setItem('user.id', data.data.id);
      window.localStorage.setItem('user.uuid', data.data.uuid);
      window.location.replace('/tags');
    },
    error: function(error) {
      console.log(error);
    }
  })
}
