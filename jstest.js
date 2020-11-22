var flag = 0;

function dayNight() {
	if (flag===0){
		var x = document.getElementById("body");
 x.style.backgroundColor = '#293133';
 x.style.color = "#FAEBD7";
 flag=1;
 var img = document.getElementById("night_day_bytton");
 img.style.backgroundColor = '#FAEBD7';
 	}
	else if (flag===1) {
		var x = document.getElementById("body");
 		x.style.backgroundColor = '#FFDEAD';
 x.style.color = "black";
 flag=0;
 var img = document.getElementById("night_day_bytton");
 img.style.backgroundColor = '#293133';
	}
}
