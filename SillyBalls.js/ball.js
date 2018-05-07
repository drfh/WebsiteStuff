// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI


function Ball()
{
	this.rad = random(5, 30);

	this.randomize = function()
	{
		this.x = random(width);
		this.y = random(height);

		this.r = random(255);
		this.g = random(255);
		this.b = random(255);

		this.bob=true;
	}

	this.show = function()
	{
	//	var thick = map(random(20), 0, 20, 1, 3);
		strokeWeight(0);
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, 50, 50);

		if(this.bob)
		{
			fill(255-this.r, 255-this.g, 255-this.b);
			textSize(16);
			textStyle(BOLD);
			text('Bob!', this.x-(textWidth("Bob")/2), this.y+(16/2));
		}

	}
}
