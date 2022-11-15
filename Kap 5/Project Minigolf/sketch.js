let x = 250;
let y = 550;
let r = 40;
let V = -90;
let v = 10;

function setup() {
  createCanvas(500, 700);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  fill(148, 38, 38);
  rect(20, 20, 460, 660);
  fill(86, 125, 70);
  rect(50, 50, 400, 600);
  fill(0, 0, 0);
  circle(250, 550, 40);
  if (keyIsPressed) {
    if (keyIsDown(RIGHT_ARROW)) {
      V += 0.5;
    } else if (keyIsDown(LEFT_ARROW)) {
      V -= 0.5;
    }
  }
  beginShape();
  print(x, y, sin(V));
  for (let i = 0; i < 100; i++) {
    x = x * (1 + cos(V));
    y = y * (1 + sin(V));
    vertex(x, y);
  }
  endShape();
}
