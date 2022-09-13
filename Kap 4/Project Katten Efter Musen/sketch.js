let MX;
let MY;
let MR = 50;
let Speed;
let imgMouse;
let imgMouseInverted;
let HBMX;
let HBMY;
let HBMR = 77/2;
let MRetning = 1;

let SpeedCat = [-10,-9,-8,-7-6,-5,-4,4,5,6,7,8,9,10]
let SpeedCatMaxP = 15;
let SpeedCatMaxN = -15;
let Cat1X;
let Cat1Y;
let Cat1SpeedX;
let Cat1SpeedY;
let Cat1HBX;
let Cat1HBY;
let Cat1HBR;
let imgCat1;
let imgCat1Inverted;
let imgCat1X = 2543/18;
let imgCat1Y = 1746/18;

let Cat2X;
let Cat2Y;
let Cat2SpeedX;
let Cat2SpeedY;
let Cat2HBX;
let Cat2HBY;
let Cat2HBR;
let imgCat2;
let imgCat2Inverted;
let imgCat2X = 800/5.5;
let imgCat2Y = 800/5.5;

let Cat3X;
let Cat3Y;
let Cat3SpeedX;
let Cat3SpeedY;
let Cat3HBX;
let Cat3HBY;
let Cat3HBR;
let imgCat3;
let imgCat3X = 1898 / 24;
let imgCat3Y = 3458 / 24;

let RX;
let RY;
let Rlen;
let eX;
let eY;
let soundYouDied;

function preload() {
  imgMouse = loadImage('Assets/Mouse.png');
  imgMouseInverted = loadImage('Assets/MouseInverted.png');
  imgCat1 = loadImage('Assets/Cat1.png');
  imgCat1Inverted = loadImage('Assets/Cat1Inverted.png');
  imgCat2 = loadImage('Assets/Cat2.png');
  imgCat2Inverted = loadImage('Assets/Cat2Inverted.png');
  imgCat3 = loadImage('Assets/Cat3.png');
  soundYouDied = loadSound('Assets/YouDied.mp3');
}

function setup() {
  createCanvas(1200, 600);
  Speed = 7.5;
  MX = random(MR,width-MR);
  MY = random(MR,height-MR);

  Cat1X = width / 2;
  Cat1Y = height / 2;
  Cat1HBR = imgCat1Y / 2;

  Cat2X = width / 2;
  Cat2Y = height / 2;
  Cat2HBR = imgCat2X / 2;

  Cat3X = width/2;
  Cat3Y = height/2;
  Cat3HBR = imgCat3X / 2;
  Cat1SpeedX = 1;
  Cat1SpeedY = 1;
  Cat2SpeedX = 1;
  Cat2SpeedY = 1;
  Cat3SpeedX = 1;
  Cat3SpeedY = 1;
}

function draw() {
  background(50);

  /*
  Cat1SpeedX = (4/sqrt((HBMX-Cat1HBX)**2+(HBMY-Cat1HBY)**2)) * (HBMX-Cat1HBX);
  Cat1SpeedY = (4/sqrt((HBMX-Cat1HBX)**2+(HBMY-Cat1HBY)**2)) * (HBMY-Cat1HBY);
  Cat2SpeedX = (4/sqrt((HBMX-Cat2HBX)**2+(HBMY-Cat2HBY)**2)) * (HBMX-Cat2HBX);
  Cat2SpeedY = (4/sqrt((HBMX-Cat2HBX)**2+(HBMY-Cat2HBY)**2)) * (HBMY-Cat2HBY);
  Cat3SpeedX = (4/sqrt((HBMX-Cat3HBX)**2+(HBMY-Cat3HBY)**2)) * (HBMX-Cat3HBX);
  Cat3SpeedY = (4/sqrt((HBMX-Cat3HBX)**2+(HBMY-Cat3HBY)**2)) * (HBMY-Cat3HBY);
 */
  if (keyIsDown(87) && MY > 0) { // W
    MY -= Speed;
  }
  if (keyIsDown(83) && MY < height-95) { // S
    MY += Speed;
  }
  if (keyIsDown(65) && MX > 0) { // A
    MX -= Speed;
    MRetning = -1;
  }
  if (keyIsDown(68) && MX < width-74) { // D
    MX += Speed;
    MRetning = 1; 
  }
  if (Cat1X < 0 || Cat1X > width-imgCat1X) {
    Cat1SpeedX *= -1
  }
  if (Cat1Y < 0 || Cat1Y > height-imgCat1Y) {
    Cat1SpeedY *= -1
  }
  if (Cat2X < 0 || Cat2X > width-imgCat2X) {
    Cat2SpeedX *= -1;
  }
  if (Cat2Y < 0 || Cat2Y > height-imgCat2Y) {
    Cat2SpeedY *= -1;
  }
  if (Cat3X < 0 || Cat3X > width-imgCat3X) {
    Cat3SpeedX *= -1;
  }
  if (Cat3Y < 0 || Cat3Y > height-imgCat3Y) {
    Cat3SpeedY *= -1;
  }

  HBMX = MX+45;
  HBMY = MY+HBMR;
  Cat1HBX = Cat1X + (imgCat1X / 2);
  Cat1HBY = Cat1Y + (imgCat1Y / 2);
  Cat2HBX = Cat2X + (imgCat2X / 2);
  Cat2HBY = Cat2Y + (imgCat2Y / 2);
  Cat3HBX = Cat3X + (imgCat3X / 2);
  Cat3HBY = Cat3Y + (imgCat3Y / 2);
  Cat1X += Cat1SpeedX;
  Cat1Y += Cat1SpeedY;
  Cat2X += Cat2SpeedX;
  Cat2Y += Cat2SpeedY; 
  Cat3X += Cat3SpeedX;
  Cat3Y += Cat3SpeedY;

  if (sqrt((HBMX-Cat1HBX)**2+(HBMY-Cat1HBY)**2) < Cat1HBR+HBMR || sqrt((HBMX-Cat2HBX)**2+(HBMY-Cat2HBY)**2) < Cat2HBR+HBMR ||  sqrt((HBMX-Cat3HBX)**2+(HBMY-Cat3HBY)**2) < Cat3HBR+HBMR) {
    Cat1X = width / 2;
    Cat1Y = height / 2;
    Cat1SpeedX = random(SpeedCat);
    Cat1SpeedY = random(SpeedCat);
    Cat2X = width / 2;
    Cat2Y = height / 2;
    Cat2SpeedX = random(SpeedCat);
    Cat2SpeedY = random(SpeedCat);
    Cat3X = width / 2;
    Cat3Y = height / 2;
    Cat3SpeedX = random(SpeedCat);
    Cat3SpeedY = random(SpeedCat);
    soundYouDied.play();
  }
  if (MRetning > 0) {
    image(imgMouse, MX, MY);
  }
  if (MRetning < 0) {
    image(imgMouseInverted, MX, MY);
  }
  image(imgCat1, Cat1X, Cat1Y, imgCat1X, imgCat1Y);
  image(imgCat2, Cat2X, Cat2Y, imgCat2X, imgCat2Y);
  image(imgCat3, Cat3X, Cat3Y, imgCat3X, imgCat3Y);
}