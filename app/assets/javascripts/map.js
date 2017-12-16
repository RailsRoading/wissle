var position = {
  // Default position
  default: {
    lat: 57.049515,
    lng: 9.916286
  },

  // Current location
  current: null,

  // Map
  map: null,

  // Wissles
  wissles: null,
};

function initMap() {
  position.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: position.default,
    disableDefaultUI: true
  });

  // Geolocate every 5 seconds
  setTimeout(geolocate, 5000);

  // Add blue dot on map
  geolocate();

  // Add wissles on map
  getWissles((wissles) => {
    position.wissles = wissles.map((wissle) => {
      var marker = new google.maps.Marker({
        position: { lat: wissle.latitude, lng: wissle.longitude },
        map: position.map,
        title: wissle.text
      });

      marker.addListener('click', function() {
        showWissle(wissle.id);
      });

      return {
        ...wissle,
        marker: marker
      }
    });
  });
}

function geolocate() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (pos) {
      var newPosition = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

      if (position.current) {
        position.current.setPosition(newPosition);
      } else {
        position.current = new google.maps.Marker({ position: newPosition, map: position.map, icon: '/assets/bluedot.png' });
      }

      position.map.panTo(newPosition);
    });
  } else {
    showAlert('Location is not supported')
  }
}
