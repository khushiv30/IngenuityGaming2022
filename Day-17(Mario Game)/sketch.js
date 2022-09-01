// // Global Scope
// var bg, bgImage;
// var mario, mario_running;
// var ground;
// var brickImage, bricksGroup;

// var coinImage, coinsGroup;
// var coinScore = 0;

// var coinSound;

// var enemyImage, enemiesGroup;
// var turImage, turGroup;

// // Load Assets
// function preload() {
//   bgImage = loadImage("images/bgnew.jpg");
//   mario_running = loadAnimation(
//     "images/mar1.png",
//     "images/mar2.png",
//     "images/mar3.png",
//     "images/mar4.png",
//     "images/mar5.png",
//     "images/mar6.png"
//   );
//   brickImage = loadImage("images/brick.png");
//   coinImage = loadAnimation(
//     "images/con1.png",
//     "images/con2.png",
//     "images/con3.png",
//     "images/con4.png",
//     "images/con5.png",
//     "images/con6.png"
//   );
//   enemyImage = loadAnimation(
//     "images/mush1.png",
//     "images/mush2.png",
//     "images/mush3.png",
//     "images/mush4.png",
//     "images/mush5.png",
//     "images/mush6.png"
//   );
//   turImage = loadAnimation(
//     "images/tur1.png",
//     "images/tur2.png",
//     "images/tur3.png",
//     "images/tur4.png",
//     "images/tur5.png",
//   )
//   coinSound = loadSound("sounds/coinSound.mp3");
//   jumpSound = loadSound("sounds/jump.mp3");
// }

// // create basic Scaleton with their required credentials
// function setup() {
//   // Create Canvas
//   createCanvas(1000, 600);

//   // create Objects
//   bg = createSprite(600, 300, 150, 50);
//   mario = createSprite(200, 520, 150, 50);

//   // Add pictures on Objects
//   bg.addImage(bgImage);
//   mario.addAnimation("running", mario_running);

//   // Scale Objects
//   bg.scale = 0.5;
//   mario.scale = 0.2;

//   // create Ground
//   ground = createSprite(200, 580, 400, 10);
//   bricksGroup = new Group();
//   coinsGroup = new Group();
//   enemiesGroup = new Group();
//   turGroup = new Group();
// }

// // Used to redraw the Objects on the canvas
// function draw() {
//   // Make background move and repeate
//   bg.velocityX = -5;
//   if (bg.x < 100) bg.x = bg.width / 4;

//   // mario Fly
//   if (keyDown("space")) {
//     mario.velocityY = -10;
//     jumpSound.play();
//   }

//   // add Gravity
//   mario.velocityY = mario.velocityY + 0.5;

//   // mario stuck on ground
//   mario.collide(ground);
//   ground.visible = false;

//   // call GenerateBricks
//   generateBricks();

//   for (var i = 0; i < bricksGroup.length; i++) {
//     var temp = bricksGroup.get(i);
//     if (mario.isTouching(temp)) {
//       mario.collide(temp);
//     }
//   }
//   if (mario.x < 200) {
//     mario.x = 200;
//   }
//   if (mario.y < 50) {
//     mario.y = 50;
//   }

//   generateCoins();

//   for (var i = 0; i < coinsGroup.length; i++) {
//     var temp = coinsGroup.get(i);
//     if (mario.isTouching(temp)) {
//       temp.destroy();
//       coinSound.play();
//       coinScore++;
//       temp = null;
//     }
//   }


//   generateEnemy();

//   generateTurtle();

//   // Redraw Objects
//   drawSprites();

//   // display Score
//   textSize(20);
//   fill("brown");
//   text("Coins Collected: " + coinScore, 500, 50);
// }

// function generateBricks() {
//   if (frameCount % 80 == 0) {
//     console.log(frameCount);

//     var brick = createSprite(1200, 100, 40, 10);
//     brick.y = random(50, 450);
//     brick.addImage(brickImage);
//     brick.scale = 0.5;
//     brick.velocityX = -5;
//     brick.lifetime = 250;
//     bricksGroup.add(brick);
//   }
// }

// function generateCoins() {
//   if (frameCount % 50 == 0) {
//     var coin = createSprite(1200, 100, 40, 10);
//     coin.y = random(50, 450);
//     coin.addAnimation("rotate", coinImage);
//     coin.scale = 0.1;
//     coin.velocityX = -5;
//     coin.lifetime = 250;
//     coinsGroup.add(coin);
//   }
// }

// function generateEnemy() {
//   if (frameCount % 65 == 0) {
//     var enemy = createSprite(1200, 550, 40, 10);
//     // enemy.y = random(500,650);
//     enemy.addAnimation("rotate",enemyImage);
//     enemy.scale = 0.1;
//     enemy.velocityX = -5;
//     enemy.lifetime = 250;
//     enemiesGroup.add(enemy);
//   }
// }


// function generateTurtle() {
//   if (frameCount % 70 == 0) {
//     var tur = createSprite(1200, 560, 50, 20);
//     tur.addAnimation("rotate",turImage);
//     tur.scale = 0.1;
//     tur.velocityX = -5;
//     tur.lifetime = 250;
//     turGroup.add(tur);
//   }
// }


var bg, bgImage;

var mario, mario_running;
var mario_collided;

var brickGroup, brickImage;

var coinImage, coinsGroup;
var coinScore = 0;

var mushObstacleImage, turtleObstacleImage, obstaclesGroup;

var gameState = "PLAY";

var restartImg;

var pipeGroup, pipeImage;

function preload() {
  bgImage = loadImage("images/bgnew.jpg");
  mario_running = loadAnimation(
    "images/mar1.png",
    "images/mar2.png",
    "images/mar3.png",
    "images/mar4.png",
    "images/mar5.png",
    "images/mar6.png",
    "images/mar7.png"
  );

  brickImage = loadImage("images/brick.png");

  pipeImage = loadImage("images/pipe.png");

  coinImage = loadAnimation(
    "images/con1.png",
    "images/con2.png",
    "images/con3.png",
    "images/con4.png",
    "images/con5.png"
  );

  // Add Sounds
  coinSound = loadSound("sounds/coinSound.mp3");
  jumpSound = loadSound("sounds/jump.mp3");

  mushObstacleImage = loadAnimation(
    "images/mush1.png",
    "images/mush2.png",
    "images/mush3.png",
    "images/mush4.png",
    "images/mush5.png",
    "images/mush6.png"
  );
  turtleObstacleImage = loadAnimation(
    "images/tur1.png",
    "images/tur2.png",
    "images/tur3.png",
    "images/tur4.png",
    "images/tur5.png"
  );
  mario_collided = loadAnimation("images/dead.png");

  dieSound = loadSound("sounds/dieSound.mp3");

  restartImg = loadImage("images/restart.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(600, 300);
  bg.addImage(bgImage);
  bg.scale = 0.5;

  mario = createSprite(200, 520, 20, 50);
  mario.addAnimation("running", mario_running);
  mario.scale = 0.2;

  ground = createSprite(200, 580, 400, 10);

  brickGroup = new Group();

  coinsGroup = new Group();

  obstaclesGroup = new Group();

  pipeGroup = new Group();

  mario.addAnimation("collided", mario_collided);

  restart = createSprite(500, 300);
  restart.addImage(restartImg);
  restart.visible = false;
}

function draw() {
  drawSprites();

  if (gameState == "PLAY") {
    // Make background Move
    bg.velocityX = -5;
    if (bg.x < 100) {
      bg.x = bg.width / 4;
    }

    // Make Mario Jump-Up
    if (keyDown("space")) {
      mario.velocityY = -10;

      // Mario Jump Sound
      jumpSound.play();
    }

    // Make Mario Come-Down
    mario.velocityY = mario.velocityY + 0.5;

    // Ground for Mario
    mario.collide(ground);
    ground.visible = false;

    generateBricks();

    generatePipes();

    // Stay on Bricks
    for (var i = 0; i < brickGroup.length; i++) {
      var temp = brickGroup.get(i);
      if (temp.isTouching(mario)) {
        mario.collide(temp);
      }
    }

    // Mario Issue
    if (mario.x < 200) mario.x = 200;
    if (mario.y < 50) mario.y = 50;

    generateCoins();

    // Collect Coins
    for (var i = 0; i < coinsGroup.length; i++) {
      var temp = coinsGroup.get(i);
      if (temp.isTouching(mario)) {
        coinScore++;
        //Coin Sound
        coinSound.play();

        temp.destroy();
        temp = null;
      }
    }

    generateObstacles();
    if (obstaclesGroup.isTouching(mario)) {
      dieSound.play();
      gameState = "END";
    }
  } 
  
  else if (gameState === "END") {
    bg.velocityX = 0;
    mario.velocityY = 0;
    mario.velocityX = 0;

    obstaclesGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    brickGroup.setVelocityXEach(0);

    brickGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);

    mario.changeAnimation("collided", mario_collided);
    mario.y = 570;
    mario.scale = 0.4;

    restart.visible = true;
    if (mousePressedOver(restart)) {
      restartGame();
    }
  }

  // Score Card
  textSize(20);
  fill("brown");
  text("Coins Collected: " + coinScore, 500, 50);
}

function generateBricks() {
  if (frameCount % 70 === 0) {
    var brick = createSprite(1200, 120, 40, 10);
    brick.y = random(50, 450);
    brick.addImage(brickImage);
    brick.scale = 0.5;
    brick.velocityX = -5;

    brick.lifetime = 250;

    brickGroup.add(brick);
  }
}

function generateCoins() {
  if (frameCount % 80 === 0) {
    var coin = createSprite(1200, 120, 40, 10);
    coin.y = Math.round(random(80, 350));
    coin.addAnimation("coin", coinImage);
    coin.scale = 0.1;
    coin.velocityX = -3;

    coin.lifetime = 500;

    coinsGroup.add(coin);
  }
}

function generateObstacles() {
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(1200, 555, 10, 40);
    obstacle.velocityX = -5;
    obstacle.scale = 0.1;
    var rand = Math.round(random(1, 2));
    switch (rand) {
      case 1:
        obstacle.addAnimation("mush", mushObstacleImage);
        break;
      case 2:
        obstacle.addAnimation("turtle", turtleObstacleImage);
        break;
      default:
        break;
    }
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}

function restartGame() {
  gameState = "PLAY";

  obstaclesGroup.destroyEach();
  brickGroup.destroyEach();
  coinsGroup.destroyEach();
  // pipeGroup.destroyEach();

  mario.changeAnimation("running", mario_running);
  mario.scale = 0.2;

  coinScore = 0;

  restart.visible = false;
}

function generatePipes() {
  if (frameCount % 70 === 0) {
    var pipe = createSprite(1200, 520, 40, 10);
    // 
    
    pipe.addImage(pipeImage);
    pipe.scale = 0.5;
    pipe.velocityX = -5;

    pipe.lifetime = 250;

    pipeGroup.add(pipe);
  }
}