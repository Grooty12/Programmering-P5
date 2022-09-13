let C1X;
let C1Y;
let C1R = 100;
let C1SX = 1;
let C1SY = 1;

function setup() {
  createCanvas(800, 600);
  C1X = random(50,width-50);
  C1Y = random(50,height-50);
}

function draw() {
  background(220);
  if (C1X < 50 || C1X > width-50) {
    C1SX*= -1;
  }
  if (C1Y < 50 || C1Y > height-50) {
    C1SY*= -1;
  }
  C1X+=C1SX;
  C1Y+=C1SY;
  if (abs(sqrt((C1X-mouseX)**2+(C1Y-mouseY)**2)) < C1R/2) {
    fill(0,255,0);
  }
  else {
    fill(255,0,0);
  }
  ellipse(C1X,C1Y,C1R,C1R);
}
