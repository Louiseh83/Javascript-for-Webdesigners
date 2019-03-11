var gMapAPIKey = 'AIzaSyDu7yy4Mw48hAMICC-ragCYdrwotv1j8zI';

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('hplus-map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
    });
}
