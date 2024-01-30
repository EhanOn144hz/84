// Create a reference for the canvas
canvas= document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;


var img_image;

img_x = 100;
img_y = 100;
greencar_width = 75;
greencar_height = 100;
greencar_x= 5;
greencar_y=225;
function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	img_imgTag.src = OIP.jpg;   // load image

	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadgreencar; // setting a function, onloading this variable
	img_imgTag.src = greencar_image;   // load image
}


function uploadBackground() {

	ctx.drawImage(background_imgTag, 0, 0, canvs.width, canvas.height);
}
function uploadgreencar() {

	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			aplhabetkey();
			document.getElementById(d1).innerHTML="You are pressing alphabet keys";
			console.log("alphabetkey");
		}
		else if(keyPressed>=48 && keyPressed<=57){      
			numberkey();
			document.getElementById(d1).innerHTML="You are pressing number keys";
			console.log("numberkey");
		}
		else if(keyPressed>=37 && keyPressed<=40){
			arrowkey();
			document.getElementById(d1).innerHTML="You are pressing arrow keys";
			console.log("arrowkey");
		}
		else if((keyPressed==17)||(keyPressed==18)||(keyPressed==27)){
			specialkey();
			document.getElementById(d1).innerHTML="You are pressing special keys";
			console.log("specialkey");
		}



	      else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
	//upload respective image with the message. 
img_image="Alpkey.png";
add();
}
function numberkey()
{
	img_image="numkey.png";
add();
}
function arrowkey()
{
	img_image="Arrkey.png";
add();
}
function specialkey()
{
	img_image="spkey.png";
	add();	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
function up()
{
	if(greencar_y >=0)
	{
		greencar_y= greencar_y-10;
		console.log("When up arrow is pressed, x= "+ greencar_x + " | y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}
	
