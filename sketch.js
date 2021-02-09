let snake;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(500, 500);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(8);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(rez);
  background(51);

  for (var x2 = 0; x2 < w; x2++) {
    for (var y2 = 0; y2 < h; y2++) {
      stroke(0)
      strokeWeight(0.1)
      noFill()
      rect(x2, y2, 1, 1)
    }
  }

  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}