var placedPopup;

var escalatorDownIcon = L.icon({
    iconUrl: '/escalatordownpin.png',

    iconSize:     [50, 61], // size of the icon
    iconAnchor:   [22, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var checkoutIcon = L.icon({
    iconUrl: '/checkoutpin.png',

    iconSize:     [50, 61], // size of the icon
    iconAnchor:   [22, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var closureIcon = L.icon({
    iconUrl: '/closurepin.png',

    iconSize:     [50, 61], // size of the icon
    iconAnchor:   [22, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var escalatorUpIcon = L.icon({
    iconUrl: '/escalatoruppin.png',

    iconSize:     [50, 61], // size of the icon
    iconAnchor:   [22, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var hazardIcon = L.icon({
    iconUrl: '/hazardpin.png',

    iconSize:     [50, 61], // size of the icon
    iconAnchor:   [22, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var mensrestroomIcon = L.icon({
    iconUrl: '/mensrestroompin.png',

    iconSize:     [50, 61], // size of the icon
    iconAnchor:   [22, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var stairsIcon = L.icon({
    iconUrl: '/stairspin.png',

    iconSize:     [50, 61], // size of the icon
    iconAnchor:   [22, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var elevatorIcon = L.icon({
    iconUrl: '/elevatorpin.png',

    iconSize:     [50, 61], // size of the icon
    iconAnchor:   [22, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});



function onMapClick(e) {
  /**
     placedPopup = L.popup()
        .setLatLng([e.latlng.lat, e.latlng.lng])
        .setContent($('#popups option:selected').text())
        .openOn(map);
    */
  
  placedPopup.setLatLng(e.latlng);
} 

function createMarker(markerType) {
  if(markerType === "Closure") {
    return closureIcon;
  }
  else if (markerType === "Elevator") {
    return elevatorIcon;
  }
  else if(markerType === "Escalator Down") {
    return escalatorDownIcon;
  }
  else if(markerType === "Escalator Up") {
    return escalatorUpIcon;
  }
  else if(markerType === "Hazard") {
    return hazardIcon;
  }
  else if(markerType === "Restroom") {
    return mensrestroomIcon;
  }
  else if(markerType === "Stairs") {
    return stairsIcon;
  }
  else if(markerType === "Checkout") {
    return checkoutIcon;
  }
}


var mapImage = '/' + $('#hiddenMapImage').val();
  console.log(mapImage);
  // Using leaflet.js to pan and zoom a big image.
    var map = L.map('add-map', {
      minZoom: 1,
      maxZoom: 4,
      center: [0, 0],
      zoom: 2,
      crs: L.CRS.Simple
    });
    // dimensions of the image
 
    var w = 792,
        h = 612,
        url = mapImage;
    // calculate the edges of the image, in coordinate space
    var southWest = map.unproject([0, h], map.getMaxZoom()-1);
    var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
    var bounds = new L.LatLngBounds(southWest, northEast);
    // add the image overlay, 
    // so that it covers the entire map
    L.imageOverlay(url, bounds).addTo(map);
    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(bounds);

    var myIcon = L.icon({
    iconUrl: 'my-icon.png',
});
    
    map.on('click', onMapClick);
    



//to get dropdown menu to toggle
$(document).ready(function() {
  $(".dropdown-toggle").dropdown();
  var markerType = $('#hiddenMarkerType').val();
  var markerIcon = createMarker(markerType);
  placedPopup = L.marker([-51, 51], {icon : markerIcon }).addTo(map);

  /**
  placedPopup = L.popup()
      .setLatLng([-51, 51])
      .setContent("Type in field below to change text, and tap to change location")
      .openOn(map);
  */

  $('#saveButton').click(update);
});
  
/**
$("#popups").change(textChanged);
  
function textChanged() {
  placedPopup.setContent($(this).val())
}
*/

function update() {
  console.log('help')
  var lat = placedPopup.getLatLng().lat;
  var lng = placedPopup.getLatLng().lng;
  //var popupText = $('#popups option:selected').text();
  var popupText = $('#hiddenMarkerType').val();
  var address = $('#hiddenAddress').val();
  var userDescription = $('#userDescription').val();
  $.post('/addToMap/update', {
    "lat" : lat,
    "lng" : lng,
    "popupText" : popupText,
    "address" : address,
    "userDescription" : userDescription
  }, function() {
    console.log('update')
    
  });
  
  window.history.back();
}


   

    


    