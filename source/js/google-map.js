var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('google-map'), {
    zoom: 17,
    center: new google.maps.LatLng(59.938716, 30.319347),
    mapTypeId: 'roadmap'
  });

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(59.938616, 30.323014),
    icon: 'img/map-pin.png',
    map: map
  });
}
