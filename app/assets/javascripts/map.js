function initMap() {
  var aalborg = {
    lat: 57.049515,
    lng: 9.916286
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: aalborg,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({position: aalborg, map: map});
}
