
var rot= 0;

function myFunction() {
	
	rot = rot + 1;
	
	if (rot == 15){ 
		document.getElementById("demo").innerHTML = "YOU CLICKED  ! " + rot;
	}
	else if (rot >= 30){ 
		document.getElementById("demo").innerHTML = " STOP  ! ";
		return 0;
	}
	else{
		document.getElementById("demo").innerHTML = "YOU CLICKED ME ! " + rot;
	}
}




