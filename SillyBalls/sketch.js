// Author: David Harris
// Silly Balls


var		balls = [];
var		bob = true;
var		speed_limit=false;
var		numberBalls=20;

function setup()
{
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < numberBalls; i++)
	{
		balls[i] = new Ball();
	}

	frameRate(1);
	background(230, 230, 250);

	bob_checkbox = createCheckbox('Bob', bob);
	bob_checkbox.changed(myCheckedEvent);

	speedlimit_checkbox = createCheckbox('Speed Limit', bob);
	speedlimit_checkbox.changed(speedlimit_CheckedEvent);

//	rSlider = createSlider(0, 255, 100);
//	rSlider.position(20, 20);
//	gSlider = createSlider(0, 255, 0);
//	gSlider.position(20, 50);
//	bSlider = createSlider(0, 255, 255);
//	bSlider.position(20, 80);
}

function windowResized()
{
	resizeCanvas(windowWidth, windowHeight);
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

function speedlimit_CheckedEvent()
{
	if (this.checked()) {
		frameRate(20);
	} else {
		frameRate(-1);
	}
}
