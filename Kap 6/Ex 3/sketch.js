x = 200;
y = 300;
d = 100;
x3 = 200;
y3 = 400;
d3 = 101;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  circle(x, y, d);
  circle(x3, y3, d3);
  print(checkColission(x, x3, y, y3, d / 2, d3 / 2));
}

function checkColission(x1, x2, y1, y2, r1, r2) {
  if (sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2) < r1 + r2) {
    return true;
  } else {
    return false;
  }
}
