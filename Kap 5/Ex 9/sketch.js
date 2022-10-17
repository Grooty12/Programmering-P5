let y;
let x = 10;
let y1;
let x1 = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  y = height / 10;
  y1 = height / 10;
}

function draw() {
  background(220);
  for (let i = 0; i < 13; i++) {
    line(x, y + i * 50, x + 50, y + i * 50);
  }
  x += 1;
  for (let i = 0; i < 10; i++) {
    line(x1, y1 + i * 60, x1, y1 + i * 60 + 50);
  }
  x1 += 2;
  if (x > width) {
    x = 0;
  }
  if (x1 > width) {
    x1 = 0;
  }
}
