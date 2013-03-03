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
	
	if(request==null){
		alert("error creating request object --Ajax not supported?");
	}
	else{
	
		request.open("GET","http://mbtamap-cedar.herokuapp.com/mapper/redline.json", true);
		request.send();
		request.onreadystatechange=function(){
			if(request.readyState==4 && request.status==200){
				document.write("hi");
			
			}
			else if(request.status!=200) {
				document.write("boo");
			}

		
		}
	}

}

function find_location(){
	var x=document.getElementById("info_div");
	  if (navigator.geolocation)
	    {
	    navigator.geolocation.getCurrentPosition(showPosition);
	    }
	  else{document.write("Geolocation is not supported by this browser.");}
	  }
	function showPosition(position)
	  {
	  document.write("Latitude: " + position.coords.latitude + 
	  "<br>Longitude: " + position.coords.longitude); 
	  }
