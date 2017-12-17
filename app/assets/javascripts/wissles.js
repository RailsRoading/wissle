$(document).ready(function() {
  $('#form-wissle').submit(function(e) {
    e.preventDefault();

    createWissle(
      $('#modal-create-wissle-text').val(),
      $('#modal-create-wissle-category').val(),
      function() {
        $('#modal-create-wissle-text').val('');
        $('#modal-create-wissle').foundation('close');

        showWissles();
      });
  });
});

function showCreateWissle() {
  $('#modal-create-wissle').foundation('open');

  position.geocoder.geocode({ location: position.current.getPosition() }, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        $('#modal-create-wissle-address').html(results[0].formatted_address);
      } else {
        $('#modal-create-wissle-address').html('<i>No address found</i>');
      }
    } else {
      showAlert(status);
    }
  });
}

function showWissle(id) {
  var $modal = new Foundation.Reveal($('#modal-show-wissle'));

  getWissle(id, (wissle) => {
    $modal.open();

    $('#modal-show-wissle-text').html(wissle.text);
    $('#modal-show-wissle-user').html(wissle.user.data.username + ' (' + wissle.user.data.age + ')');
    $('#modal-show-wissle-timestamp').html(moment(wissle.created_at * 1000).fromNow());
    $('#modal-show-wissle-category').html(wissle.category);

    // Geocoded address
    position.geocoder.geocode({ location: { lat: wissle.latitude, lng: wissle.longitude } }, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
          $('#modal-show-wissle-address').html(results[0].formatted_address);
        } else {
          $('#modal-show-wissle-address').html('<i>No address found</i>');
        }
      } else {
        showAlert(status);
      }
    });

  })
}

function showWissles() {
  getWissles((wissles) => {
    position.wissles = wissles.map((wissle) => {
      var marker = new google.maps.Marker({
        position: {lat: wissle.latitude, lng: wissle.longitude},
        map: position.map,
        title: wissle.text,
        icon: '/assets/markers/' + wissle.category.toLowerCase() + '.png'
      });

      marker.addListener('click', function () {
        showWissle(wissle.id);
      });

      return {
        ...wissle,
        marker: marker
      }
    });
  });
}
