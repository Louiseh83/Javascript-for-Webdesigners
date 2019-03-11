var map;
function initMap() {
	var storeLocation = {lat: 34.1031131, lng: -118.326343};

	map = new google.maps.Map(document.getElementById('hplus-map'), {
		'center' : storeLocation,
		'zoom' : 12,
		'mapTypeId' : google.maps.MapTypeId.ROADMAP,
		'draggable' : false,
		'scrollwheel' : false
	});
	
	var popupContent = 'H+ Sport Hollywood<br>';
	    popupContent += '1750 Vine St<br>';
		popupContent += 'Los Angeles, CA';
		
	var popupContentChavez = 'H+ Sport Chavez Ravine<br>';
	    popupContentChavez += '1000 Vin Scully Ave<br>';
		popupContentChavez += 'Los Angeles, CA';
		
	var infowindowHollywood = new google.maps.InfoWindow({
			content: popupContentHollywood
		}),
		infowindowChavez = new google.maps.InfoWindow({
			content: popupContentChavez
		});
	
	var markerHollywood = new google.maps.Marker({
			'position': storeLocationHollywood,
			'map': map,
			'title': 'H+ Sport in Hollywood (actually Capitol Records)'
		}),
		markerChavez = new google.maps.Marker({
			'position': storeLocationChavez,
			'map': map,
			'title': 'H+ Sport in Chavez Ravine (actually Dodger Stadium)'
		});

		markerHollywood.addListener('click', function() {
			infowindowHollywood.open(map, markerHollywood);
		});
		
		markerChavez.addListener('click', function() {
			infowindowChavez.open(map, markerChavez);
		});
	}
	
	function geocodeAddress(address) {
		var geocoder = new google.maps.Geocoder();
	
		geocoder.geocode({'address': address}, function(results, status) {
			if (status === google.maps.GeocoderStatus.OK) {
				console.log('Geocoded address: ', results[0].geometry.location.toString());
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	}