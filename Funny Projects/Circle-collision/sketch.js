let Speed;
let C1X;
let C1Y;
let C1SX;
let C1SY;
let C1R;
let C1H;
let C2X;
let C2Y;
let C2SX;
let C2SY;
let C2R;
let C2H;
let C3X;
let C3Y;
let C3SX;
let C3SY;
let C3R;
let C3H;
let C4X;
let C4Y;
let C4SX;
let C4SY;
let C4R;
let C4H;

function setup() {
  createCanvas(1000, 700);
  C1R = random(25,100);
  C2R = random(25,100);
  C3R = random(25,100);
  C4R = random(25,100);
  C1X = random(C1R,width-C1R);
  C1Y = random(C1R,height-C1R);
  C2X = random(C2R,width-C2R);
  C2Y = random(C2R,height-C2R);
  C3X = random(C3R,width-C3R);
  C3Y = random(C3R,height-C3R);
  C4X = random(C4R,width-C4R);
  C4Y = random(C4R,height-C4R);
  C1SX = random(1,2);
  C1SY = random(1,2);
  C2SX = random(1,2);
  C2SY = random(1,2);
  C3SX = random(1,2);
  C3SY = random(1,2);
  C4SX = random(1,2);
  C4SY = random(1,2);
  Speed = 1
}

function draw() {
  background(220);
  C1H = 0;
  C2H = 0;
  C3H = 0;
  C4H = 0;
  C1X+=C1SX*Speed;
  C1Y+=C1SY*Speed;
  C2X+=C2SX*Speed;
  C2Y+=C2SY*Speed;
  C3X+=C3SX*Speed;
  C3Y+=C3SY*Speed;
  C4X+=C4SX*Speed;
  C4Y+=C4SY*Speed;
  if (keyIsDown(RIGHT_ARROW)) {Speed+=0.1;}
  if (keyIsDown(LEFT_ARROW)) {Speed-=0.1}

  if (C1X < C1R || C1X > width-C1R) {C1SX*=-1;}
  if (C1Y < C1R || C1Y > height-C1R) {C1SY*=-1;}
  if (C2X < C2R || C2X > width-C2R) {C2SX*=-1;}
  if (C2Y < C2R || C2Y > height-C2R) {C2SY*=-1;}
  if (C3X < C3R || C3X > width-C3R) {C3SX*=-1;}
  if (C3Y < C3R || C3Y > height-C3R) {C3SY*=-1;}
  if (C4X < C4R || C4X > width-C4R) {C4SX*=-1;}
  if (C4Y < C4R || C4Y > height-C4R) {C4SY*=-1;}

  if (sqrt((C1X-C2X)**2+(C1Y-C2Y)**2) < (C1R)+(C2R) || sqrt((C1X-C3X)**2+(C1Y-C3Y)**2) < (C1R)+(C3R) || sqrt((C1X-C4X)**2+(C1Y-C4Y)**2) < (C1R)+(C4R)) {C1H = 1;}
  if (sqrt((C2X-C1X)**2+(C2Y-C1Y)**2) < (C2R)+(C1R) || sqrt((C2X-C3X)**2+(C2Y-C3Y)**2) < (C2R)+(C3R) || sqrt((C2X-C4X)**2+(C2Y-C4Y)**2) < (C2R)+(C4R)) {C2H = 1;}
  if (sqrt((C3X-C1X)**2+(C3Y-C1Y)**2) < (C3R)+(C1R) || sqrt((C3X-C2X)**2+(C3Y-C2Y)**2) < (C3R)+(C2R) || sqrt((C3X-C4X)**2+(C3Y-C4Y)**2) < (C3R)+(C4R)) {C3H = 1;}
  if (sqrt((C4X-C1X)**2+(C4Y-C1Y)**2) < (C4R)+(C1R) || sqrt((C4X-C2X)**2+(C4Y-C2Y)**2) < (C4R)+(C2R) || sqrt((C4X-C3X)**2+(C4Y-C3Y)**2) < (C4R)+(C3R)) {C4H = 1;}



  if (C1H == 1) {fill(0,255,0);}
  else {fill(255,0,0);}
  ellipse(C1X,C1Y,C1R*2,C1R*2);
  if (C2H == 1) {fill(0,255,0);}
  else {fill(255,0,0);}
  ellipse(C2X,C2Y,C2R*2,C2R*2);
  if (C3H == 1) {fill(0,255,0);}
  else {fill(255,0,0);}
  ellipse(C3X,C3Y,C3R*2,C3R*2);
  if (C4H == 1) {fill(0,255,0);}
  else {fill(255,0,0);}
  ellipse(C4X,C4Y,C4R*2,C4R*2);
}
