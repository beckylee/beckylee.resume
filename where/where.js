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
		marker.setMap(map);

				// This is a global info window...
		var infowindow = new google.maps.InfoWindow();

				// Open info window on click of marker
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(marker.title);
			infowindow.open(map, marker);
		});
}