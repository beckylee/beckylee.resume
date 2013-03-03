function where(){

	find_location();
	try{
		request = new XMLHttpRequest();
	}
	catch(ms1){
		try {
			request = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (ms2){
			try{
				request = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(ex){
				request = null;
				document.write("here");
			
			}
		}
	}
	
//	if(request==null){
//		alert("error creating request object --Ajax not supported?");
//	}
//	else{
	
//		request.open("GET","http://mbtamap-cedar.herokuapp.com/mapper/redline.json", true);
//		request.send();
//		request.onreadystatechange=function(){
//			if(request.readyState==4 && request.status==200){
//				document.write("hi");
//			
//			}
//			else if(request.status!=200) {
//				document.write("boo");
//			}

		
//		}
	}

//}

function find_location(){
var x=document.getElementById("info_div");

	  if (navigator.geolocation)
	    {
	    navigator.geolocation.getCurrentPosition(showPosition,showError);
	    
	    }
	  else{x.innerHTML("Geolocation is not supported by this browser.");}

 }

function showPosition(position)
{
var x=document.getElementById("info_div");

	x.innerHTML="what";
	  x.innerHTML="Latitude: " + position.coords.latitude + 
	  "<br>Longitude: " + position.coords.longitude; 
	  init(position.coords.latitude, position.coords.longitude);
	
 }
	  
function showError(error){
var x=document.getElementById("info_div");

  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
     x.innerHTML="User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML="Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML="The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML="An unknown error occurred."
      break;
    }
  }



function init(lat, lng)
{
		var location = new google.maps.LatLng(lat, lng);

		// Set up map
		var myOptions = {
			zoom: 13, // The larger the zoom number, the bigger the zoom
			center: location,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

				// Create the map in the "map_canvas" <div>
		var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

				// Create a marker				
		var marker = new google.maps.Marker({
			position: location,
			title: "You are here"
		});
		
		//all of the redline stops
		var alewife_t = new google.maps.LatLng(42.395428, -71.142483);
		var alewife = new google.maps.Marker({
			position: alewife_t,
			title: "Alewife Station"
		});
		
		
		var davis_t = new google.maps.LatLng(42.39674, -71.121815);
		var davis = new google.maps.Marker({
			position: davis_t,
			title: "Davis Square Station"
		});
		
		var porter_t = new google.maps.LatLng(42.3884, -71.119149);
		var porter = new google.maps.Marker({
			position: porter_t,
			title: "Porter Station"
		});
		
		var harvard_t = new google.maps.LatLng(42.373362, -71.118956);
		var harvard = new google.maps.Marker({
			position: harvard_t,
			title: "Harvard Station"
		});
		
		var central_t = new google.maps.LatLng(42.365486, -71.103802);
		var central = new google.maps.Marker({
			position: central_t,
			title: "Central Square Station"
		});
		
		var kendall_t = new google.maps.LatLng(42.36249079, -71.08617653);
		var kendall = new google.maps.Marker({
			position: kendall_t,
			title: "Kendall/MIT Station"
		});
		
		var charles_t = new google.maps.LatLng(42.361166, -71.070628);
		var charles = new google.maps.Marker({
			position: charles_t,
			title: "Charles/MGH Station"
		});
		
		var park_t = new google.maps.LatLng(42.35639457, -71.0624242);
		var park = new google.maps.Marker({
			position: park_t,
			title: "Park Street Station"
		});
		
		var downtown_t = new google.maps.LatLng(42.355518, -71.060225);
		var downtown = new google.maps.Marker({
			position: downtown_t,
			title: "Downtown Crossing Station"
		});
		
		var south_t = new google.maps.LatLng(42.352271, -71.055242);
		var south = new google.maps.Marker({
			position: south_t,
			title: "South Station"
		});
		
		var broadway_t = new google.maps.LatLng(42.342622, -71.056967);
		var broadway = new google.maps.Marker({
			position: broadway_t,
			title: "Broadway Station"
		});
		
		var andrew_t = new google.maps.LatLng(42.330154, -71.057655);
		var andrew = new google.maps.Marker({
			position: andrew_t,
			title: "Andrew Station"
		});
		
		var jfk_t = new google.maps.LatLng(42.320685, -71.052391);
		var jfk = new google.maps.Marker({
			position: jfk_t,
			title: "JFK/ UMass Station"
		});
		
		var savin_t = new google.maps.LatLng(42.31129, -71.053331);
		var savin = new google.maps.Marker({
			position: savin_t,
			title: "Savin Hill Station"
		});
		
		var fields_t = new google.maps.LatLng(42.300093, -71.061667);
		var fields = new google.maps.Marker({
			position: fields_t,
			title: "Fields Corner Station"
		});
		
		var shawmut_t = new google.maps.LatLng(42.29312583, -71.06573796);
		var shawmut = new google.maps.Marker({
			position: shawmut_t,
			title: "Shawmut Station"
		});
		
		var ashmont_t = new google.maps.LatLng(42.284652, -71.064489);
		var ashmont = new google.maps.Marker({
			position: ashmont_t,
			title: "Ashmont Station"
		});
		
		//add Braintree stops
		
		marker.setMap(map);
		alewife.setMap(map);
		davis.setMap(map);
		porter.setMap(map);
		harvard.setMap(map);
		central.setMap(map);
		kendall.setMap(map);
		charles.setMap(map);
		park.setMap(map);
		downtown.setMap(map);
		south.setMap(map);
		broadway.setMap(map);
		andrew.setMap(map);
		jfk.setMap(map);
		savin.setMap(map);
		fields.setMap(map);
		shawmut.setMap(map);
		ashmont.setMap(map);
		
		
		

		var stops = [
			alewife,
			davis,
			porter,
			harvard,
			central, kendall, charles, park, downtown, south];
			
		var redline = new google.maps.Polyline({
			path: stops,
			strokeColor: red,
			strokeOpacity: 1.0,
			strokeWeight: 2
		});
		
				// This is a global info window...
		var infowindow = new google.maps.InfoWindow();

				// Open info window on click of marker
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(marker.title);
			infowindow.open(map, marker);
		});
}