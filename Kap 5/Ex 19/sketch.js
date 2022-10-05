let x;
let y;
let Length = 80;
let Angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(20);
  stroke(255);
  translate(x, y);
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
}
