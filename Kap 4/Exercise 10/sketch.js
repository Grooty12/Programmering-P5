let x1;
let y1;
let imgMouse;
let x2;
let y2;
let imgMouse2;

function setup() {
  createCanvas(512, 512);
  imgMouse = loadImage('Pictures/Mouse.png')
  imgMouse2 = loadImage('Pictures/Mouse2.png')
  x1 = random(64,width-64);
  x2 = random(64,width-64);
  y1 = random(41,height-41);
  y2 = random(54,height-41);
}

function draw() {
  background(220);
  if (keyIsDown(LEFT_ARROW) && x1 > 0) { 
    x1 -= 5;
  }
  if (keyIsDown(RIGHT_ARROW) && x1 < width-64) { 
    x1 += 5;
  }
  if (keyIsDown(UP_ARROW) && y1 > 0) { 
    y1 -= 5;
  }
  if (keyIsDown(DOWN_ARROW) && y1 < height-41) { 
    y1 += 5;
  }


  if (keyIsDown(65) && x2 > 0) { 
    x2 -= 5;
  }
  if (keyIsDown(68) && x2 < width-64) { 
    x2 += 5;
  }
  if (keyIsDown(87) && y2 > 0) { 
    y2 -= 5;
  }
  if (keyIsDown(83) && y2 < height-54) { 
    y2 += 5;
  }
  
  image(imgMouse, x1, y1, 64, 41);
  image(imgMouse2,x2,y2,64,54);
}
