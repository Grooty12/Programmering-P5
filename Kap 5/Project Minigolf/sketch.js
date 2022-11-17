let r = 40;
let V = 90;
let vx = 1;
let vy = 1;
let X = 250;
let Y = 550;
let x1 = 200;
let y1 = 150;
let r1 = 100;

function setup() {
  createCanvas(500, 700);
  angleMode(DEGREES);
}

function draw() {
  X = 250;
  Y = 550;
  vx = 5;
  vy = 5;
  background(220);
  fill(148, 38, 38);
  rect(20, 20, 460, 660);
  fill(86, 125, 70);
  rect(50, 50, 400, 600);
  fill(255);
  circle(250, 550, 40);
  rect(x1, y1, r1, r1);
  if (keyIsPressed) {
    if (keyIsDown(RIGHT_ARROW)) {
      V -= 0.5;
    } else if (keyIsDown(LEFT_ARROW)) {
      V += 0.5;
    }
  }
  noFill();
  beginShape();
  for (let i = 0; i < 500; i++) {
    vertex(X, Y);
    X += 1 * cos(V) * vx;
    Y -= 1 * sin(V) * vy;
    CheckCollision(X, Y);
  }
  endShape();
}

function CheckCollision(x, y) {
  if (x < 0 || x > width) {
    vx *= -1;
  }
  if (y < 0 || y > height) {
    vy *= -1;
  }
  if (x > x1 && x < x1 + r1) {
    print("TJEK1");
    print(y, y1, y1 + r1);
    if ((y > y1 && y < y1 + 5) || (y < y1 + r1 && y > y1 + r1 - 5)) {
      vy *= -1;
      print("TJEK");
    }
  }
  if (y > y1 && y < y1 + r1) {
    if ((x > x1 && x < x1 + 5) || (x < x1 + r1 && x > x1 + r1 - 5)) {
      vx *= -1;
    }
  }
}
