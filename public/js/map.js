var elevatorArray = [];
var escalatorDownArray = [];
var escalatorUpArray = [];
var closureArray = [];
var hazardArray = [];
var restroomArray = [];
var stairsArray = [];
var checkoutArray = [];
var otherArray = [];

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

/**
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
} 
*/

function onMarkerClick(e) {
  e.target.closePopup();
  var popupText = e.target._popup.getContent();
  $('#modalText').html(popupText);
  $('#exampleModal').modal('show');
}

//function called when pin is selected from modal redirects to addToMap.handlebars
function onModalPinClick(e) {
  var divClicked = e.target.children('p').val();
  alert(divClicked);
}

function toggle(array) {
  //L.marker([-58.75, 43.5]).addTo(map);
  /**
  console.log('hello');
  for(var i = 0; i < array.length; i++) {
    console.log(array.length);
     L.popup({autoClose:false})
        .setLatLng([array[i].latitude, array[i].longitude])
        .setContent(array[i].popupText)
        .openOn(map);
  }
  */
  if(array.length == 0)
    alert("No popups have been added for this category yet")
  for(var i = 0; i < array.length; i++) {
    var currentPopup = array[i];
    //currentPopup.openOn(map);
    currentPopup.addTo(map);
  }
}

function unToggle(array) {
  for(var i = 0; i < array.length; i++) {
    var currentPopup = array[i];
    //map.closePopup(currentPopup);
    currentPopup.removeFrom(map);
  }
}



var storeMap = '/' + $('#hiddenMapImage').val();
console.log(storeMap);
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
        url = storeMap;
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


    
   // map.on('click', onMapClick);
    
var firstCheck = document.querySelector("#firstCheck");
var secondCheck = document.querySelector("#secondCheck");
var thirdCheck = document.querySelector("#thirdCheck");
var fourthCheck = document.querySelector("#fourthCheck");
var fifthCheck = document.querySelector("#fifthCheck");
var sixthCheck = document.querySelector("#sixthCheck");
var seventhCheck = document.querySelector("#seventhCheck");
var eighthCheck = document.querySelector("#eighthCheck");


firstCheck.addEventListener( 'change', function() {
    if(this.checked) {
        toggle(elevatorArray);
    } else {
        unToggle(elevatorArray);
        // Checkbox is not checked..
    }
});

secondCheck.addEventListener( 'change', function() {
    if(this.checked) {
        toggle(escalatorDownArray);
    } else {
        // Checkbox is not checked..
      unToggle(escalatorDownArray);
    }
});

thirdCheck.addEventListener( 'change', function() {
    if(this.checked) {
        toggle(escalatorUpArray);
    } else {
        // Checkbox is not checked..
      unToggle(escalatorUpArray);
    }
});

fourthCheck.addEventListener( 'change', function() {
    if(this.checked) {
        toggle(closureArray);
    } else {
        // Checkbox is not checked..
      unToggle(closureArray);
    }
});

fifthCheck.addEventListener( 'change', function() {
    if(this.checked) {
        toggle(hazardArray);
    } else {
        // Checkbox is not checked..
      unToggle(hazardArray);
    }
});

sixthCheck.addEventListener( 'change', function() {
    if(this.checked) {
      toggle(restroomArray);
    } else {
        // Checkbox is not checked..
      unToggle(restroomArray);
    }
});

seventhCheck.addEventListener( 'change', function() {
    if(this.checked) {
        toggle(stairsArray);
    } else {
        // Checkbox is not checked..
      unToggle(stairsArray);
    }
});

eighthCheck.addEventListener( 'change', function() {
    if(this.checked) {
      toggle(checkoutArray);
    } else {
        // Checkbox is not checked..
        unToggle(checkoutArray);
    }
});



//to get dropdown menu to toggle
$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
  
    //hide checkboxes on page load
  /**
    $('#checkboxes').hide();
  
  
    $("#filter").click(function(event) {
      event.preventDefault();
      $a = $(this)
      $('#checkboxes').slideToggle('slow', function() {
        $(window).scrollTop($a.offset().top);
      });
      
    })
    */
    //send get request to get popups of store, address of store used as id to search through data.json
    $.get("/map/getPopups",{"address" : $('#hiddenAddress').val()}, function(data) {
      var popupArray = data.popupArray;
      console.log(popupArray.length);
      //loop through
      for(var i = 0; i < popupArray.length; i++) {
        //get values of current popup
        var latitude = popupArray[i].latitude;
        var longitude = popupArray[i].longitude;
        var popupText = popupArray[i].popupText;
        
        //create container to hold button
        //var pop = "<b>" + popupText + "</b>" + "<br>" + "<button> Delete </button>"
        
        var currentMarker = L.marker([latitude, longitude], {icon : escalatorDownIcon}).bindPopup(popupText).on('click', onMarkerClick);
        
        /**
        var currentPopup = L.popup({autoClose:false})
        .setLatLng([latitude, longitude])
        .setContent(popupText);
        */
               
        if(popupText == "Elevator")
          elevatorArray.push(currentMarker);
        else if(popupText == "Escalator Down")
          escalatorDownArray.push(currentMarker);
        else if(popupText == "Escalator Up")
          escalatorUpArray.push(currentMarker);
        else if(popupText == "Closure")
          closureArray.push(currentMarker)
        else if(popupText == "Hazard")
          hazardArray.push(currentMarker)
        else if(popupText == "Restroom")
          restroomArray.push(currentMarker)
        else if(popupText == "Stairs")
          stairsArray.push(currentMarker)
        else if(popupText == "Checkout")
          checkoutArray.push(currentMarker);
        else
          otherArray.push(currentMarker);
        
        
      }
    })
});


   

    


    