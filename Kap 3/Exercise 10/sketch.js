let y;
let yspeed;
let x;
let xspeed;

function setup() {
  createCanvas(1000, 700);
  y=0;
  yspeed=1;
  x=0;
  xspeed=1;
}

function draw() {
  background(220);
  line(0,y,1000,y);
  line(x,0,x,700);
  y+=yspeed;
  x+=xspeed;
  if (y >= height){
    y=0;
  }
  if (x >= width){
    x=0
  }
}
