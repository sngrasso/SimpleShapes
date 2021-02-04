
//global variables
var rectX = 50;
var rectY = 500;

// Setup code goes here
function setup() {
	createCanvas(1200, 800);
	print("Starting up Simple Shapes");
}


// Draw code goes here
function draw() {
	background(75, 222, 217);

	// draw Triangle (3)
	drawTri();

	// draw Rectangle (2)
	drawRec();

	// draw Circle (~2)
	drawCirc();

	// draw Elipse
	drawElips();

	// cursor
	cursorX();
}

function drawTri() {
	/* triangle(x1, y1, x2, y2, x3, y3)*/

	// up right
	fill(181, 46, 201);
	noStroke();
	triangle(30, 75, 58, 20, 86, 75);

	// inverted
	fill(67, 28, 166);
	triangle(130, 175, 158, 230, 186, 175);


	// slanted 
	fill(255, 193, 48);
	triangle(200, 175, 158, 250, 300, 175);
}

function drawRec() {
	/* x, y, w, l */
	
	if (!mouseIsPressed) {
		fill(116, 27, 168);
		stroke(90, 28, 166);
		strokeWeight(4);
	} else {
		fill(61, 42, 235);
		noStroke();
	}
	rect(rectX, rectY, 200, 100);

	rect(rectY, rectX, 1000, 100);

	rect(300, 20, 20, 55, 20, 15, 10, 5);

	fill(199, 230, 23);
	rect(350, 120, 20, 500, 20, 15, 10, 5);

}

function drawCirc() {
	/* circle(x, y, d) */

	if (mouseIsPressed) {
		fill(84, 207, 31);
		noStroke();
	} else {
		fill(31, 207, 204);
		noStroke();
	}

	circle(width/2, height/2, 60);

	if (mouseIsPressed) {
		fill(0);
		noStroke();
	} else {
		fill(255);
		noStroke();
	}

	circle(width/2, height/2, 10);

}

function drawElips() {
	/* ellipse(x, y, w, [h]) */

	fill(181, 46, 201);
	ellipse(width/2 + 200, height/2, 255, 355);

	fill(255, 193, 48);
	ellipse(width/2 + 300, height/2 + 200, 250, 360);
}

function cursorX() {
	fill(61, 42, 235);
	ellipse(pmouseX, pmouseY, 15, 15);
}
