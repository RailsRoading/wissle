function getWissle(id) {
  var $modal = new Foundation.Reveal($('#modal-show-wissle'));

  $.ajax({
    url: '/api/wissles',
    dataType: 'json',
    contentType: 'application/json',
    headers: {
      'Authorization': window.localStorage.getItem('user.uuid')
    },
    success: function(data) {
      $modal.open();

      var wissle = data[0].data;

      $('#modal-show-wissle-text').html(wissle.text);
      $('#modal-show-wissle-user').html(wissle.user.data.username + ' (' + wissle.user.data.age + ')')
      $('#modal-show-wissle-latitude').html(wissle.latitude);
      $('#modal-show-wissle-longitude').html(wissle.longitude);
    },
    error: function(error) {
      showAlert(error);
    }
  })
}

function createWissle(text, callback) {
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
      }
    }),
    success: callback,
    error: function(error) {
      showAlert(error);
    }
  })
}
