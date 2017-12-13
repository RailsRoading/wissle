function getWissle(id) {
  var $modal = new Foundation.Reveal($('#modal-show-wissle'));
  $modal.open();

  $.ajax({
    url: '/api/wissles',
    dataType: 'json',
    contentType: 'json',
    headers: {
      'Authorization': window.localStorage.getItem('user.uuid')
    },
    success: function(data) {
      var wissle = data[0].data;

      $('#modal-show-wissle-text').html(wissle.text);
      $('#modal-show-wissle-user').html(wissle.user.data.username + ' (' + wissle.user.data.age + ')')
      $('#modal-show-wissle-latitude').html(wissle.latitude);
      $('#modal-show-wissle-longitude').html(wissle.longitude);
    },
    error: function(error) {
    }
  })
}
