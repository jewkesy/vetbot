 var mymap = L.map('mapid').setView([51.505, -0.09], 5);
          
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.light'
      
      
    }).addTo(mymap);
        

function gotoLoc(l) {

	// map.panTo(new L.LatLng(40.737, -73.923));

	map.panTo(new L.LatLng(l.lat, l.lon));
}

function loadContent(c) {
	 var greenCiv = L.icon({
  iconUrl: 'icons/civ_green.png',
  iconSize:     [45, 40], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var blueCiv = L.icon({
  iconUrl: 'icons/civ_blue.png',
  iconSize:     [45, 40], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var redCiv = L.icon({
  iconUrl: 'icons/civ_red.png',
  iconSize:     [45, 40], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var redVet = L.icon({
  iconUrl: 'icons/vetran_red.png',
  iconSize:     [35, 40], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var blueVet = L.icon({
  iconUrl: 'icons/vetran_blue.png',
  iconSize:     [35, 40], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var greenVet = L.icon({
  iconUrl: 'icons/vetran_green.png',
  iconSize:     [35, 40], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


L.marker([51.5, -0.09], {icon: greenCiv}).addTo(mymap)
  .bindPopup('<strong>Title</strong><br>Description')
    .openPopup();
L.marker([51.5, -0.10], {icon: blueCiv}).addTo(mymap)
  .bindPopup('<strong>Title</strong><br>Description')
    .openPopup();
L.marker([51.5, -0.11], {icon: redCiv}).addTo(mymap)
  .bindPopup('<strong>Title</strong><br>Description')
    .openPopup();
L.marker([51.5, -0.115], {icon: redVet}).addTo(mymap)
  .bindPopup('<strong>Title</strong><br>Description')
    .openPopup();
L.marker([51.5, -0.105], {icon: blueVet}).addTo(mymap)
  .bindPopup('<strong>Title</strong><br>Description')
    .openPopup();
L.marker([51.5, -0.095], {icon: greenVet}).addTo(mymap)
  .bindPopup('<strong>Title</strong><br>Description')
    .openPopup();
}

