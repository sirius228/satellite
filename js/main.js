//function to start the Leaflet map
function createMap(){

    //Varibles needed for running the funcation
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a> | <a href="https://sounny.github.io/">Sounny Slitine</a>';
    
    var apitoken = 'pk.eyJ1Ijoid2hsaXVvIiwiYSI6ImNrNDBheXZ2bTAwMmMza21waWt1dzFtbmEifQ.tMeKhJG07ijemodOqCZ24A' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
    
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}'; //URL used for Stanard MaxBox Styles
    
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}'; //URL used for Custom MapBox Styles
    
    
    //Variables for the different basemaps
    var darkTerrain = L.tileLayer(mbStyleUrl, {id: 'whliuo/ck40b1l6p90yh1cmnm8n42vhn', token: apitoken,  attribution: mbAttr});
    
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    var dark  = L.tileLayer(mbUrl, {id: 'mapbox.dark', token: apitoken,  attribution: mbAttr});
    
    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken,  attribution: mbAttr});
    
   
    
    //create the map*/
    var map = L.map('map', {
        center: [29.00, -81.00],//Coordinated to center the map
        zoom: 6, //zoom level
        layers:darkTerrain //default base
    });
    
    //create the basemap control layer*/
    var baseLayers = {
		"Outdoors": outdoors,
        "Grayscale": grayscale,
		"Darkscale": dark,
        "Dark Terrain": darkTerrain
    };
    
    L.control.layers(baseLayers).addTo(map);
};


//calling the funcation
$(document).ready(createMap);