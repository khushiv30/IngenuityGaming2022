// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
// canvas.height=window.innerHeight-20;
// canvas.width=window.innerWidth-20;
// canvas.width=window.innerWidth;
// canvas.height=window.innerHeight;
// canvas.style.backgroundColor="lightgreen";
// canvas.style.border="5px dashed darkgreen";
canvas.style.background="url('../Assets/green backround.png')";
// canvas.style.backgroundSize="cover";
// canvas.style.backgroundRepeat="no-repeat";
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
// bgImage.src = "../Assets/green backround.png";

// bgImage.style.backgroundSize="cover";

// bgImage.src="https://media.istockphoto.com/photos/green-textured-cardboard-background-picture-id1353173739?b=1&k=20&m=1353173739&s=170667a&w=0&h=qgD73m2bobSXB2EYZ4cqmjn2uq3q30LGrEw4W4V3BpI=";
// bgImage.style.width=window.innerWidth;
// bgImage.style.height=window.innerHeight;
// bgImage.style.backgroundSize="cover";
// bgImage.style.backgroundPosition="center";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "../Assets/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "../Assets/monster.png";

// Game objects
var hero = {
	h:30,
	w:30,
	speed: 256 // movement in pixels per second
};
var monster = {};
var monstersCaught = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects
var update = function (modifier) {
	clear();
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
		// if(hero.y >=0 && hero.y >=480){
		// 	hero.y -= hero.speed * modifier;
		// }
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
	}

	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++monstersCaught;
		// monstersCaught++;
		reset();
	}
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
		// clear();
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	detectWalls();
	// Score
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.font = "27px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);
	// ctx.style.color="darkfreen";
};

// this is clear function
function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
  }


// Drawing walls 
function detectWalls() {
	// Left wall
	if (hero.x < 0) {
	  hero.x = 0;
	}
  
	// Right Wall
	if (hero.x + hero.w > canvas.width) {
	  hero.x = canvas.width - hero.w;
	}
  
	// Top wall
	if (hero.y < 0) {
	  hero.y = 0;
	}
  
	// Bottom Wall
	if (hero.y + hero.h > canvas.height) {
	  hero.y = canvas.height - hero.h;
	}
  }


// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();

reset();

main();
