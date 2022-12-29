let P = 25,
  speedX = 1,
  speedY = 0,
  headX,
  headY;
function setup() {
  createCanvas(
    round((windowWidth - 12.5) / 25) * 25,
    round((windowHeight - 12.5) / 25) * 25
  );
  noStroke();
  ellipseMode(CENTER);
  headX = round((windowWidth / 2 - 12.5) / 25) * 25;
  headY = round((windowHeight / 2 - 12.5) / 25) * 25;
}

function drawBackground() {
  background(10);
  for (let j = 0; j * P < height; j++) {
    for (let i = 0; i * P < width; i++) {
      if (i % 2 == 0) {
        if (j % 2 == 0) {
          fill(50);
        } else {
          fill(30);
        }
      } else {
        if (j % 2 == 1) {
          fill(50);
        } else {
          fill(30);
        }
      }
      rect(i * P, j * P, P, P);
    }
  }
}

function draw() {
  drawBackground();
  fill("Blue");
  rect(headX, headY, 25);
  headX += speedX;
  headY += speedY;
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    speedX = -1;
    speedY = 0;
    print(headY);
    headY = round(headY / 25) * 25;
    print(headY);
  } else if (keyCode == RIGHT_ARROW) {
    speedX = 1;
    speedY = 0;
    headY = round(headY / 25) * 25;
  } else if (keyCode == UP_ARROW) {
    speedY = -1;
    speedX = 0;
    headX = round(headX / 25) * 25;
  } else if (keyCode == DOWN_ARROW) {
    speedY = 1;
    speedX = 0;
    headX = round(headX / 25) * 25;
  }
}
