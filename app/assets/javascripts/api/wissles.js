function getWissles(callback) {
  $.ajax({
    url: '/api/wissles',
    dataType: 'json',
    contentType: 'application/json',
    headers: {
      'Authorization': window.localStorage.getItem('user.uuid')
    },
    success: function(data) {
      var wissles = data.map(w => w.data);

      callback(wissles);
    },
    error: function(error) {
      showAlert(error);
    }
  })
}

function getWissle(id, callback) {
  $.ajax({
    url: '/api/wissles/' + id,
    dataType: 'json',
    contentType: 'application/json',
    headers: {
      'Authorization': window.localStorage.getItem('user.uuid')
    },
    success: function(data) {
      callback(data.data);
    },
    error: function(error) {
      showAlert(error);
    }
  })
}

function createWissle(text, category, callback) {
  $.ajax({
    url: '/api/wissles',
    dataType: 'json',
    contentType: 'application/json',
    method: 'POST',
    headers: {
      'Authorization': window.localStorage.getItem('user.uuid')
    },
    data: JSON.stringify({
      data: {
        text: text,
        latitude: position.current.getPosition().lat(),
        longitude: position.current.getPosition().lng(),
        category: category,
      }
    }),
    success: callback,
    error: function(error) {
      showAlert(error);
    }
  })
}
