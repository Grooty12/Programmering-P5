x = 200;
y = 200;
r = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  circle(x, y, r * 2);
}

function mousePressed() {
  if (mouseButton == LEFT) {
    if (sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2) < r) {
      print("TRUE");
    } else print("FALSE");
  } else {
    print("FALSE");
  }
}
