let x;
let y;
let xp;
let yp;
let xspeed;
let yspeed;
let xmouse;
let ymouse;

function setup() { 
  createCanvas(1000, 700);
  x = width/2 
  y = height/2
  xspeed = 0;
  yspeed = 0;
} 

function draw() { 
  background(220);
  if (x <=0){
    x = 1000;
  }
  else if (x >=width){
    x = 0; 
  }
  if (y <= 0){ 
    y = 700;
  }
  else if (y >=height) {
    y=0
  }
  ellipse(x, y, 50, 50);
  x+=xspeed; 
  y+=yspeed;
  if(mouseIsPressed){
    xmouse=mouseX; 
    ymouse=mouseY; 
    xp=x;
    yp=y;
  }
  if (x == xmouse && y == ymouse) { 
    xspeed=0; 
    yspeed=0; 
  }
  if (xp > xmouse){ 
      xspeed=-((ymouse-yp)/(xmouse-xp));
    }
  else if (xp < xmouse){ 
      xspeed=-((ymouse-yp)/(xmouse-xp));
    }
  if (yp > ymouse){ 
    yspeed=1/((ymouse-yp)/(xmouse-xp));
  }
  else if (yp < ymouse){ 
    yspeed=1/((ymouse-yp)/(xmouse-yp));
  }
}