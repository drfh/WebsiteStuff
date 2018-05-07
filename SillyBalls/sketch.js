// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI

// Purple Rain
// (138, 43, 226)
// (230, 230, 250) // background


var		balls = [];
var		bob = true;
var		numberBalls=20;

function setup()
{
	createCanvas(1280, 800);
	for (var i = 0; i < numberBalls; i++)
	{
		balls[i] = new Ball();
	}
//	frameRate(20);
	background(230, 230, 250);

	bob_checkbox = createCheckbox('Bob', bob);
	bob_checkbox.changed(myCheckedEvent);

//	rSlider = createSlider(0, 255, 100);
//	rSlider.position(20, 20);
//	gSlider = createSlider(0, 255, 0);
//	gSlider.position(20, 50);
//	bSlider = createSlider(0, 255, 255);
//	bSlider.position(20, 80);
}


function draw()
{
	var		i;
	var		count=balls.length;

	for(i = 0; i < count; i++)
	{
		balls[i].randomize();
		balls[i].bob=bob;
	}
	for(i = 0; i < count; i++)
	{
		balls[i].show();
	}
}


function myCheckedEvent()
{
	if (this.checked()) {
		bob=true;
	} else {
		bob=false;
	}
}
