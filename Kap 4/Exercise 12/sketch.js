let X;
let Y;
let R;
let Point;

function setup() {
  createCanvas(1000, 700);
  R = 50;
  X = random(R,width-R);
  Y = random(R, height-R);
  Point = 0;
}

function draw() {
  background(220);
  if (mouseIsPressed) {
    if (sqrt((mouseX-X)**2+(mouseY-Y)**2) < R) {
      Point += 1;
      X = random(R, width-R);
      Y = random(R, height-R);
    }
  }
  textSize(50);
  text(Point,200,100);
  ellipse(X,Y,R*2,R*2);
}
