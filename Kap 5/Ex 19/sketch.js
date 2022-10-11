/*let Length = 80;
let Angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  stroke(255);
  translate(width / 2, height / 2);
  rotate(Angle);
  for (let j = 0; j < 30; j++) {
    for (let i = 0; i < 15; i++) {
      line(0 + 40 * j, 0 + 100 * i, 0 + 40 * j, 0 + 100 * i + Length);
      line(0 - 40 * j, 0 + 100 * i, 0 - 40 * j, 0 + 100 * i + Length);
      line(0 + 40 * j, 0 - 100 * i, 0 + 40 * j, 0 - 100 * i + Length);
      line(0 - 40 * j, 0 - 100 * i, 0 - 40 * j, 0 - 100 * i + Length);
    }
  }
  Angle += 0.01;
}*/
let v0 = 10;
let g = -9.82;
let x;
let angle = 20;
let t = 0;
let vx;
let vy;
function setup() {
  background();
  createCanvas(400, 400);
  mand();
  firkant();
}

function mand() {
  circle(50, 300, 30);
  line(50, 315, 50, 375);
  line(50, 375, 25, 400);
  line(50, 375, 75, 400);
}
function firkant() {
  rect(300, 300, 50, 75);
}
function parabel() {
  x = 50;
  t = 0;
  v0y = Math.sin(angle) * v0;
  vx = Math.cos(angle) * v0;
  for (let y = 315; y < 400; ) {
    point(x, y);
    vy = v0y * t + (1 / 2) * g * t ** 2;
    x += vx;
    y += vy;
    t++;
  }
}
function keyPressed() {
  if (keyIsDown(75)) {
    parabel();
  }
}
