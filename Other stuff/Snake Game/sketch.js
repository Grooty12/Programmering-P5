let P = 25,
  speedX = 2.5,
  speedY = 0,
  speed = 2,
  snake = [];
function setup() {
  createCanvas(
    round((windowWidth - 12.5) / 25) * 25,
    round((windowHeight - 12.5) / 25) * 25
  );
  noStroke();
  ellipseMode(CENTER);
  let headX = round((windowWidth / 2 - 12.5) / 25) * 25;
  let headY = round((windowHeight / 2 - 12.5) / 25) * 25;
  snake[0] = new Snakes(headX, headY, speedX, speedY);
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
  snake[0].update();
  snake[0].display();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    speedX = -2.5;
    speedY = 0;
  } else if (keyCode == RIGHT_ARROW) {
    speedX = 2.5;
    speedY = 0;
  } else if (keyCode == UP_ARROW) {
    speedY = -2.5;
    speedX = 0;
  } else if (keyCode == DOWN_ARROW) {
    speedY = 2.5;
    speedX = 0;
  }
}

function overSideX(x, y) {
  if (x > width - 25) {
    let xCoord = x - width;
    rect(xCoord, y, 25);
    if (x > width) {
      print("Completely Over");
      return xCoord;
    }
  } else if (x < 0) {
    let xCoord = x + width;
    rect(xCoord, y, 25);
    if (x < -25) {
      print("Completely Over");
      return xCoord;
    }
  }
  return x;
}

function overSideY(x, y) {
  if (y > height - 25) {
    let yCoord = y - height;
    rect(x, yCoord, 25);
    if (y > height) {
      print("Completely Over");
      return yCoord;
    }
  } else if (y < 0) {
    let yCoord = y + height;
    rect(x, yCoord, 25);
    if (y < -25) {
      print("Completely Over");
      return yCoord;
    }
  }
  return y;
}

class Snakes {
  constructor(xPos, yPos, xVel, yVel) {
    this.position = new createVector(xPos, yPos);
    this.velocity = new createVector(xVel, yVel);
  }
  update() {
    if (this.position.y == round(this.position.y / 25) * 25) {
      this.velocity.x = speedX;
      this.position.x += this.velocity.x;
      print(this.velocity, "1");
    }
    if (this.position.x == round(this.position.x / 25) * 25) {
      this.velocity.y = speedY;
      this.position.y += this.velocity.y;
      print(this.velocity, "2");
    }
    this.position.x = overSideX(this.position.x, this.position.y);
    this.position.y = overSideY(this.position.x, this.position.y);
  }
  display() {
    rect(this.position.x, this.position.y, 25);
  }
}
