let y;
let yspeed;

function setup() { 
  createCanvas(600, 600); 
  y=height/2;
  yspeed=2;
  } 
function draw() { 
  background(204); 
  ellipse(width/2,y,50,50);
  y+=yspeed;
  if (y > height - 25 || y < 25) {
    yspeed*=-1;
  }

  } 