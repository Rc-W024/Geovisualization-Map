//Globals...
var pointArray = []; //Array of collected points...
var pointLtd = null;
var pointLng = null;
var pointAcc = null; //Accuracy...
var array;
var watchID = null;
var utm = "+proj=utm +zone=30";
var wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";

var textBox = document.getElementById("text");

var Gaode = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
       //maxZoom: 25,
       //minZoom: 1
   });
var Gaodesate1 = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {});
var Gaodesate2 = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {});
var Gaodeimg = L.layerGroup([Gaodesate1, Gaodesate2]);
	
var normalMap = L.tileLayer.chinaProvider('Google.Normal.Map', {}),
    satelliteMap = L.tileLayer.chinaProvider('Google.Satellite.Map', {});
	
var baseLayers = {
	"Google Mapa (World)": normalMap,
    "Google Ortofoto (World)": satelliteMap,
    "GaoDe Mapa (China)": Gaode,
    "GaoDe Ortofoto (China)": Gaodeimg,
};

var map = L.map("map", {layers: [normalMap]});
//var map = L.map('map').setView([51.5, -0.09], 13);

//Geolocation options...
var options = {
	enableHighAccuracy: true, //highest accuracy
	timeout: 6000 //milliseconds
};

//Get information
function getinfo () {
	alert("Get information");
	//Por Internet
    var xhr = new XMLHttpRequest();
	
	xhr.open("GET","http://mapas.valencia.es/lanzadera/opendata/Tra_recarga_electrica/CSV",true);
	xhr.send();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200){
				jsonData = xhr.responseText.replace('X;Y;descripcion', ''); //text string
				console.log(jsonData);
				//alert(jsonData);
				var textBox = document.getElementById("text");
				textBox.innerHTML =jsonData;

				var arr = jsonData.split("\n");
				console.log(arr);

				for(var k = 0; k < arr.length; k++) {
					if(arr[k]) {
						var item = arr[k].split(';');
						console.log(item)
						console.log(item[0] + item[1])
						var xy = proj4(utm, wgs84, [Number(item[0]), Number(item[1])])
						console.log(xy);
						L.marker([xy[1], xy[0]]).addTo(map).bindPopup(item[2]);
					}
				}
		}
	}
	
	//Por flies
	/*
	fetch("files/20190930_184630.csv")
        .then((data) => data.text())
        .then(data => {
            textBox.innerHTML = data;
            array = csvJSON(data);
            console.log(array);
        })
	*/
}

//Init...
function Map() {
	/*
	var normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map'),
        normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion'),
        imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map'),
        imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion');
	
    var normal = L.layerGroup([normalm, normala]),
        image = L.layerGroup([imgm, imga]);
	*/

	if (window.navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(currentLocationSucces, locationError, options);
	} else {
		alert("Geolocation not supported");
	}
	
    //Valencia -> map.setView([39.47, -0.36]) China -> [32, 100]
    L.control.layers(baseLayers, null).addTo(map);
	L.control.scale().addTo(map);
	
	L.Control.measureControl().addTo(map);
}

function visualizarChina() {
	alert("Positioning to China...");
	var extent = [[16,70], [56,138]];
	var rect = L.rectangle(extent);
	
	L.rectangle(extent).addTo(map);
	map.fitBounds(extent);
}

function currentLocationSucces(position) {
	pointLng = position.coords.longitude;
	pointLtd = position.coords.latitude;
	pointAcc = position.coords.accuracy;
	
	locText.innerHTML = "&nbsp;&nbsp;&nbsp;" + //blank spaces...
						pointLng.toFixed(10) + //10 decimal places
						"&nbsp;&nbsp;&nbsp;" +
						pointLtd.toFixed(10) +
						"&nbsp;&nbsp;&nbsp; [" +
						pointAcc.toFixed(2) + "]";

	//Local map...
	map.setView([pointLtd, pointLng], 15);
	var icon = L.icon({
		iconUrl: "./img/icon.png",
		iconSize: [20, 20]
	});
	var Marker = L.marker([pointLtd, pointLng], {
		icon
	}).addTo(map);
}

//Geolocation...
function getLocation() {
	//alert("getLocation()");
	//Checks...
	if (watchID === null){
		alert("Starting Geolocation");
	} else {
		navigator.geolocation.clearWatch(watchID);
		watchID = null;
		alert("Geolocation stopped");
		return;
	}
	
	//"Accurate geolocation" = watchPosition()
	
	if (window.navigator.geolocation) {
		//Check if geolocation is available...
		
		//Basic geolocation...
		//navigator.geolocation.getCurrentPosition(locationSuccess, locationError, options);
		
		//Watch geolocation...
		watchID = navigator.geolocation.watchPosition(locationSuccess, locationError, options);
	} else {
		alert("Geolocation not supported.");	
	}
}

function locationSuccess(position) {
	//position is defined by your browser...
	pointLtd = position.coords.latitude;
	pointLng = position.coords.longitude;
	pointAcc = position.coords.accuracy;
	
	locText.innerHTML = "&nbsp;&nbsp;&nbsp;" + //blank spaces...
						pointLng.toFixed(10) + //10 decimal places
						"&nbsp;&nbsp;&nbsp;" +
						pointLtd.toFixed(10) +
						"&nbsp;&nbsp;&nbsp; [" +
						pointAcc.toFixed(2) + "]";
}

function locationError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED:
			alert("Denied geolocation request");
			break;
		case error.POSITION_UNAVAILABLE:
			alert("Location unavailable");
			break;
		case error.TIMEOUT:
			alert("Geolocation request timed out");
			break;
		case error.UNKNOWN_ERROR:
			alert("Unknown geolocation error");
			break;
	} 
}

//Add
var flag = 0;
var text = document.getElementById('text');
function datos() {
	if(flag == 0) {
		text.style.display = 'block';
		flag = 1;
	} else {
		text.style.display = 'none';
		flag = 0;
	}
}