function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
} 

function outerwareToggle() {
  //L.marker([-58.75, 43.5]).addTo(map);
   L.popup()
        .setLatLng([-58.75, 43.5])
        .setContent("Outerware")
        .openOn(map);
}

function textbooksToggle() {
  L.popup()
        .setLatLng([-59,32])
        .setContent("Textbooks")
        .openOn(map);
}

function suppliesToggle() {
  L.popup()
        .setLatLng([-49, 18])
        .setContent("Supplies")
        .openOn(map);
}

function booksToggle() {
  L.popup()
        .setLatLng([-63.75, 12.75])
        .setContent("Books")
        .openOn(map);
}



// Using leaflet.js to pan and zoom a big image.
    var map = L.map('image-map', {
      minZoom: 1,
      maxZoom: 4,
      center: [0, 0],
      zoom: 2,
      crs: L.CRS.Simple
    });
    // dimensions of the image
    var w = 792,
        h = 612,
        url = "bookstoreBlack.png";
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
    
var firstCheck = document.querySelector(".firstCheck");
var secondCheck = document.querySelector(".secondCheck");
var thirdCheck = document.querySelector(".thirdCheck");
var fourthCheck = document.querySelector(".fourthCheck");


firstCheck.addEventListener( 'change', function() {
    if(this.checked) {
        outerwareToggle();
    } else {
        // Checkbox is not checked..
    }
});

secondCheck.addEventListener( 'change', function() {
    if(this.checked) {
        textbooksToggle();
    } else {
        // Checkbox is not checked..
    }
});

thirdCheck.addEventListener( 'change', function() {
    if(this.checked) {
        suppliesToggle();
    } else {
        // Checkbox is not checked..
    }
});

fourthCheck.addEventListener( 'change', function() {
    if(this.checked) {
        booksToggle();
    } else {
        // Checkbox is not checked..
    }
});


   

    


    