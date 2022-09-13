let x1;
let x2;
let y1;
let y2;
let xs1;
let ys1;
let xs2;
let ys2;

function setup() {
  createCanvas(400, 400);
  x1=width/3;
  x2=width/1.5;
  y1=height/3;
  y2=height/1.5;
  xs1=-1;
  ys1=0.5*xs1;
  xs2=2;
  ys2=0.5*xs2
}

function draw() {
  background(250);
  if (x1 <=0){
    x1 = 400;
  }
  else if (x1 >=width){
    x1 = 0; 
  }
  if (y1 <= 0){ 
    y1 = 400;
  }
  else if (y1 >=height) {
    y1=0
  }
  if (x2 <=0){
    x2 = 400;
  }
  else if (x2 >=width){
    x2 = 0; 
  }
  if (y2 <= 0){ 
    y2 = 400;
  }
  else if (y2 >=height) {
    y2=0
  }
  ellipse(x1,y1,50,50);
  ellipse(x2,y2,50,50);
  x1+=xs1;
  x2+=xs2;
  y1+=ys1;
  y2+=ys2;

  if (x1 == x2 && y1 == y2) {
    background(random(0,255),random(0,255),random(0,255))
  }


}
