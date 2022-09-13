let x1;
let y1;
let x2;
let y2;
let cheeseX;
let cheeseY;
let imgMouse;
let imgMouse2;
let imgCheese;
let CheeseCount1;
let CheeseCount2;
let imgMX = 64;
let imgM1Y = 54;
let imgM2Y = 41;
let immgCX = 20;
let imgCY = 13.3;
let HBM1X;
let HBM1Y;
let HBM1R;
let HBCX;
let HBCY;
let HBCR;
let HBM2X;
let HBM2Y;
let HBM2R;

function setup() {
  createCanvas(512, 512);
  imgMouse = loadImage('Pictures/Mouse.png');
  imgMouse2 = loadImage('Pictures/Mouse2.png');
  imgCheese = loadImage('Pictures/Cheese.png');

  x1 = random(0,width-64);
  x2 = random(0,width-64);
  y1 = random(0,height-41);
  y2 = random(0,height-41);
  CheeseCount1 = 0;
  CheeseCount2 = 0;
  cheeseX = random(0, width-20);
  cheeseY = random(0, height-13.3);
}

function draw() {
  background(220);
  HBM1X = x1+80;
  HBM1X = y1+(41/2);
  HBM1R = 30;
  HBM2X = x2+80;
  HBM2X = y2+(41/2);
  HBM2R = 30;
  HBCX = cheeseX+10;
  HBCY = cheeseY+(13.3/2);
  HBCR = (13.3);
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
  noStroke();
  ellipse(HBCX, HBCY, HBCR, HBCR);
  noStroke();
  ellipse(HBM1X, HBM1Y, HBM1R, HBM1R);
  image(imgCheese, cheeseX, cheeseY, 20, 13.3);
  image(imgMouse2, x1, y1, imgMX, imgM2Y);
  image(imgMouse, x2, y2, imgMX, imgM1Y);




  if (abs(sqrt((cheeseX-x1)**2+(cheeseY-y1)**2)) < (HBM1R+HBCR)) {
    CheeseCount1+=1;
    cheeseX = random(0, width-20);
    cheeseY = random(0, height-13.3);
  }
  if (abs(sqrt((cheeseX-x2)**2+(cheeseY-y2)**2)) < (HBM2R+HBCR)) {
    CheeseCount2+=1;
    cheeseX = random(0, width-20);
    cheeseY = random(0, height-13.3);
  }
  fill(0);
  text(CheeseCount1, 200, 200);
  text(CheeseCount2, 400, 200);
}
