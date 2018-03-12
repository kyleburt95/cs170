var elevatorArray = [];
var escalatorDownArray = [];
var escalatorUpArray = [];
var closureArray = [];
var hazardArray = [];
var restroomArray = [];
var stairsArray = [];
var checkoutArray = [];
var otherArray = [];

/**
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
} 
*/

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
    currentPopup.openOn(map);
  }
}

function unToggle(array) {
  for(var i = 0; i < array.length; i++) {
    var currentPopup = array[i];
    map.closePopup(currentPopup);
  }
}
function textbooksToggle() {
  
  l = L.popup({autoClose:false})
        .setLatLng([-59,32])
        .setContent("Textbooks")
        .openOn(map);
}

function suppliesToggle() {
  map.closePopup(l);
  L.popup({autoClose:false})
        .setLatLng([-49, 18])
        .setContent("Supplies")
        .openOn(map);
}

function booksToggle() {
  L.popup({autoClose:false})
        .setLatLng([-63.75, 12.75])
        .setContent("Books")
        .openOn(map);
}

function stairsToggle() {
  L.popup({autoClose:false})
        .setLatLng([-66.25, 29.25])
        .setContent("Stairs")
        .openOn(map);
}

function escUpToggle() {
  L.popup({autoClose:false})
        .setLatLng([-46.875, 26.25])
        .setContent("Escalator Up")
        .openOn(map);
}


function escDownToggle() {
  L.popup({autoClose:false})
        .setLatLng([-54, 23])
        .setContent("Escalator Down")
        .openOn(map);
}
/**
function elevatorToggle() {
  L.popup({autoClose:false})
        .setLatLng([-47, 36.9375])
        .setContent("Elevator")
        .openOn(map);
}

*/




// Using leaflet.js to pan and zoom a big image.
    var map = L.map('image-map', {
      minZoom: 1,
      maxZoom: 4,
      center: [0, 0],
      zoom: 2,
      dragging: false,
      tap: false,
      crs: L.CRS.Simple
    });
    // dimensions of the image
 
    var w = 792,
        h = 612,
        url = "/bookstoreBlack.png";
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
    $('#checkboxes').hide();
  
  /**
    $("#filter").click(function() {
      $('#checkboxes').slideToggle();
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
        
        
        
        var currentPopup = L.popup({autoClose:false})
        .setLatLng([latitude, longitude])
        .setContent(popupText);
        /**
        if(popupText == "Elevator")
          elevatorArray.push(popupArray[i]);
        else if(popupText == "Escalator Down")
          escalatorDownArray.push(popupArray[i]);
        else if(popupText == "Escalator Up")
          escalatorUpArray.push(popupArray[i]);
        else if(popupText == "Closure")
          closureArray.push(popupArray[i])
        else if(popupText == "Hazard")
          hazardArray.push(popupArray[i])
        else if(popupText == "Restroom")
          restroomArray.push(popupArray[i])
        else if(popupText == "Stairs")
          stairsArray.push(popupArray[i])
        else if(popupText == "Checkout")
          checkoutArray.push(popupArray[i]);
        else
          otherArray.push(popupArray[i]);
          */
        
        if(popupText == "Elevator")
          elevatorArray.push(currentPopup);
        else if(popupText == "Escalator Down")
          escalatorDownArray.push(currentPopup);
        else if(popupText == "Escalator Up")
          escalatorUpArray.push(currentPopup);
        else if(popupText == "Closure")
          closureArray.push(currentPopup)
        else if(popupText == "Hazard")
          hazardArray.push(currentPopup)
        else if(popupText == "Restroom")
          restroomArray.push(currentPopup)
        else if(popupText == "Stairs")
          stairsArray.push(currentPopup)
        else if(popupText == "Checkout")
          checkoutArray.push(currentPopup);
        else
          otherArray.push(currentPopup);
        
        
      }
    })
});


   

    


    