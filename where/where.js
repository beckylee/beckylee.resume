// Get info from website about T stops
// 

var davis_data;

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
//				var str = request.responseText;
//				var data = JSON.parse(str);
//			
//				davis_data="hi";
//			
//			}
//			else if(request.status!=200) {
//				document.write("boo");
//			}
//
//		
//		}
//	}

}

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
	  x.innerHTML="You are at latitude: " + position.coords.latitude + 
	  ", longitude: " + position.coords.longitude; 
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
			title: "I am here!"
		});
		

		var blueIcon = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png';
		//all of the redline stops
		var alewife_t = new google.maps.LatLng(42.395428, -71.142483);
		var alewife = new google.maps.Marker({
			position: alewife_t,
			title: "Alewife Station",
			icon: blueIcon,
			map: map,
			clickable: true
		});
		
		
		var davis_t = new google.maps.LatLng(42.39674, -71.121815);
		var davis = new google.maps.Marker({
			position: davis_t,
			title: "Davis Square Station",
			icon: blueIcon
		});
		
		var porter_t = new google.maps.LatLng(42.3884, -71.119149);
		var porter = new google.maps.Marker({
			position: porter_t,
			title: "Porter Station",
			icon: blueIcon

		});
		
		var harvard_t = new google.maps.LatLng(42.373362, -71.118956);
		var harvard = new google.maps.Marker({
			position: harvard_t,
			title: "Harvard Station",
			icon: blueIcon
		});
		
		var central_t = new google.maps.LatLng(42.365486, -71.103802);
		var central = new google.maps.Marker({
			position: central_t,
			title: "Central Square Station",
			icon: blueIcon
		});
		
		var kendall_t = new google.maps.LatLng(42.36249079, -71.08617653);
		var kendall = new google.maps.Marker({
			position: kendall_t,
			title: "Kendall/MIT Station",
			icon: blueIcon
		});
		
		var charles_t = new google.maps.LatLng(42.361166, -71.070628);
		var charles = new google.maps.Marker({
			position: charles_t,
			title: "Charles/MGH Station",
			icon: blueIcon
		});
		
		var park_t = new google.maps.LatLng(42.35639457, -71.0624242);
		var park = new google.maps.Marker({
			position: park_t,
			title: "Park Street Station",
			icon: blueIcon
		});
		
		var downtown_t = new google.maps.LatLng(42.355518, -71.060225);
		var downtown = new google.maps.Marker({
			position: downtown_t,
			title: "Downtown Crossing Station",
			icon: blueIcon
		});
		
		var south_t = new google.maps.LatLng(42.352271, -71.055242);
		var south = new google.maps.Marker({
			position: south_t,
			title: "South Station",
			icon: blueIcon
		});
		
		var broadway_t = new google.maps.LatLng(42.342622, -71.056967);
		var broadway = new google.maps.Marker({
			position: broadway_t,
			title: "Broadway Station",
			icon: blueIcon
		});
		
		var andrew_t = new google.maps.LatLng(42.330154, -71.057655);
		var andrew = new google.maps.Marker({
			position: andrew_t,
			title: "Andrew Station",
			icon: blueIcon
		});
		
		var jfk_t = new google.maps.LatLng(42.320685, -71.052391);
		var jfk = new google.maps.Marker({
			position: jfk_t,
			title: "JFK/ UMass Station",
			icon: blueIcon
		});
		
		var savin_t = new google.maps.LatLng(42.31129, -71.053331);
		var savin = new google.maps.Marker({
			position: savin_t,
			title: "Savin Hill Station",
			icon: blueIcon
		});
		
		var fields_t = new google.maps.LatLng(42.300093, -71.061667);
		var fields = new google.maps.Marker({
			position: fields_t,
			title: "Fields Corner Station",
			icon: blueIcon
		});
		
		var shawmut_t = new google.maps.LatLng(42.29312583, -71.06573796);
		var shawmut = new google.maps.Marker({
			position: shawmut_t,
			title: "Shawmut Station",
			icon: blueIcon
		});
		
		var ashmont_t = new google.maps.LatLng(42.284652, -71.064489);
		var ashmont = new google.maps.Marker({
			position: ashmont_t,
			title: "Ashmont Station",
			icon: blueIcon
		});
		
		var quincy_t = new google.maps.LatLng(42.275275, -71.029583);
		var quincy = new google.maps.Marker({
			position: quincy_t,
			title: "North Quincy Station",
			icon: blueIcon
		});
		
		var wollaston_t = new google.maps.LatLng(42.2665139, -71.0203369);
		var wollaston = new google.maps.Marker({
			position: wollaston_t,
			title: "Wollaston Station",
			icon: blueIcon
		});
		
		var qcenter_t = new google.maps.LatLng(42.251809, -71.005409);
		var qcenter = new google.maps.Marker({
			position: qcenter_t,
			title: "Quincy Center Station",
			icon: blueIcon
		});
		
		var qadams_t = new google.maps.LatLng(42.233391, -71.007153);
		var qadams = new google.maps.Marker({
			position: qadams_t,
			title: "Quincy Adams Station",
			icon: blueIcon
		});
		
		var braintree_t = new google.maps.LatLng(42.2078543, -71.0011385);
		var braintree = new google.maps.Marker({
			position: braintree_t,
			title: "Braintree Station",
			icon: blueIcon
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
		quincy.setMap(map);
		wollaston.setMap(map);
		qcenter.setMap(map);
		qadams.setMap(map);
		braintree.setMap(map);
		
		
		

		var stops = [
			new google.maps.LatLng(42.395428, -71.142483),
			new google.maps.LatLng(42.39674, -71.121815),
			new google.maps.LatLng(42.3884, -71.119149),
			new google.maps.LatLng(42.373362, -71.118956),
			new google.maps.LatLng(42.365486, -71.103802), 
			new google.maps.LatLng(42.36249079, -71.08617653), 
			new google.maps.LatLng(42.361166, -71.070628), 
			new google.maps.LatLng(42.35639457, -71.0624242), 
			new google.maps.LatLng(42.355518, -71.060225), 
			new google.maps.LatLng(42.352271, -71.055242),
			new google.maps.LatLng(42.342622, -71.056967),
			new google.maps.LatLng(42.330154, -71.057655),
			new google.maps.LatLng(42.320685, -71.052391),
			new google.maps.LatLng(42.31129, -71.053331),
			new google.maps.LatLng(42.300093, -71.061667),
			new google.maps.LatLng(42.29312583, -71.06573796),
			new google.maps.LatLng(42.284652, -71.064489)
			];
			
		var redline = new google.maps.Polyline({
			path: stops,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 3
		});
		
		var braintree_line = [
			new google.maps.LatLng(42.352271, -71.055242),	
			new google.maps.LatLng(42.342622, -71.056967),
			new google.maps.LatLng(42.330154, -71.057655),
			new google.maps.LatLng(42.320685, -71.052391),
			new google.maps.LatLng(42.31129, -71.053331),
			new google.maps.LatLng(42.275275, -71.029583),
			new google.maps.LatLng(42.2665139, -71.0203369),
			new google.maps.LatLng(42.251809, -71.005409),
			new google.maps.LatLng(42.251809, -71.005409),
			new google.maps.LatLng(42.233391, -71.007153),
			new google.maps.LatLng(42.2078543, -71.0011385)
		];
		
		var other_line = new google.maps.Polyline({
			path: braintree_line,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 3
		});
		
		redline.setMap(map);
		other_line.setMap(map);
		
				// This is a global info window...
		var infowindow = new google.maps.InfoWindow();

				// Open info window on click of marker
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(marker.title);
			infowindow.open(map, marker);
		});

    var R = 6371; // radius of earth in km
    var distances = [];
    var markers = [ashmont, davis, porter];
    var closest = -1;
    for( i=0;i<markers.length; i++ ) {
        var mlat = markers[i].position.lat();
        var mlng = markers[i].position.lng();
        var dLat  = deg2rad(mlat - lat);
        var dLong = deg2rad(mlng - lng);
        var a =     Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat)) * Math.cos(deg2rad(mlat)) * 
    Math.sin(dLong/2) * Math.sin(dLong/2);
        var c =  2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        distances[i] = d;
        if ( closest == -1 || d < distances[closest] ) {
            closest = i;
        }
        
        function deg2rad(deg) {
		  return deg * (Math.PI/180)
		}
    }
    	var z=document.getElementById("distance");
		z.innerHTML="The closest T stop is " + markers[closest].title + " and is " + d + " miles away";
    
	carmen_waldo(map, lat, lng);
}

function carmen_waldo(map, lat, lng){
	var y = document.getElementById("them");
	if(request==null){
		alert("error creating request object --Ajax not supported?");
	}
	else{
	
		request.open("GET","http://messagehub.herokuapp.com/a3.json", true);
		request.send();
		request.onreadystatechange=function()
		{		
			if(request.readyState==4 && request.status==200)
			{
			
				var str = request.responseText;
				if(str != null){					
					var info = JSON.parse(str);
					console.log(info.length);
				
					var waldo_pic = 'waldo.png';
					var carmen_pic = 'carmen.png';
					
					if(info[0].name == "Waldo"){
						waldo_loc = new google.maps.LatLng(info[0].loc.latitude, info[0].loc.longitude);
						var title_info = info[0].loc.note;
						var Waldo = new google.maps.Marker({
							position: waldo_loc,
							title: title_info,
							icon: waldo_pic
						});
						find_distance(lat, lng, info[0].loc.latitude, info[0].loc.longitude, "Waldo");
						Waldo.setMap(map);
					}
					if(info[0].name == "Carmen Sandiego"){
						carmen_loc = new google.maps.LatLng(info[0].loc.latitude, info[0].loc.longitude);
						var title_info = info[0].loc.note;
						var Carmen = new google.maps.Marker({
							position: carmen_loc,
							title: title_info,
							icon: carmen_pic
						});
						find_distance(lat, lng, info[0].loc.latitude, info[0].loc.longitude, "Carmen");
						Carmen.setMap(map);
					}					
					
					if(info.length == 2){
						if(info[1].name == "Waldo"){
							waldo_loc = new google.maps.LatLng(info[1].loc.latitude, info[1].loc.longitude);
							var title_info = info[1].loc.note;
							var Waldo = new google.maps.Marker({
								position: waldo_loc,
								title: title_info,
								icon: waldo_pic
							});
						find_distance(lat, lng, info[1].loc.latitude, info[1].loc.longitude, "Waldo");
							Waldo.setMap(map);
						}	
						if(info[1].name == "Carmen Sandiego"){
							carmen_loc = new google.maps.LatLng(info[1].loc.latitude, info[1].loc.longitude);
							var title_info = info[1].loc.note;
							var Carmen = new google.maps.Marker({
								position: carmen_loc,
								title: title_info,
								icon: carmen_pic
							});
						find_distance(lat, lng, info[1].loc.latitude, info[1].loc.longitude, "Carmen");
							Carmen.setMap(map);
						}
					}													
				}

			}
			else {

			}
		}
	}
}

function find_distance(lat, lng, mlat, mlng, name){
	var y = document.getElementById("them");

				// This is a global info window...
		var infowindow = new google.maps.InfoWindow();


    var R = 6371; // radius of earth in km

        var dLat  = deg2rad(mlat - lat);
        var dLong = deg2rad(mlng - lng);
        var a =     Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat)) * Math.cos(deg2rad(mlat)) * 
    Math.sin(dLong/2) * Math.sin(dLong/2);
        var c =  2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;

        function deg2rad(deg) {
		  return deg * (Math.PI/180)
		}
		
		y.innerHTML += name + " is " + d + " miles away from you!" + '</br>';
    
}