var placedPopup;

function onMapClick(e) {
     placedPopup = L.popup()
        .setLatLng([e.latlng.lat, e.latlng.lng])
        .setContent($('#popups option:selected').text())
        .openOn(map);
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
  
    
  placedPopup = L.popup()
      .setLatLng([-51, 51])
      .setContent("Type in field below to change text, and tap to change location")
      .openOn(map);

  $('#saveButton').click(update);
});
  
$("#popups").change(textChanged);
  
function textChanged() {
  placedPopup.setContent($(this).val())
}

function update() {
  console.log('help')
  var lat = placedPopup.getLatLng().lat;
  var lng = placedPopup.getLatLng().lng;
  var popupText = $('#popups option:selected').text();
  var address = $('#hiddenAddress').val();
  $.post('/addToMap/update', {
    "lat" : lat,
    "lng" : lng,
    "popupText" : popupText,
    "address" : address
  }, function() {
    console.log('update')
    
  });
  
  alert("Popup Saved");
}


   

    


    