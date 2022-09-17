let MX;
let MY;
let MR = 50;
let Speed = 5;
let imgMouse;
let imgMouseInverted;
let HBMX;
let HBMY;
let HBMR = 77/2;
let MRetning = 1;

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
let CatSpeed = 1.5;

let CX;
let CY;
let CHBX;
let CHBY;
let CHBR;
let CheeseCounter; 
let imgCheese;
let imgCheeseX = 650/15;
let imgCheeseY = 572/15;

let BI;
let BIN; // The Quotes do not share my personal opinion. They are meant to be a joke, and a joke only.
let Quote = ['Your Birth Was A Mistake', '"Just The Text: "Jumpcare""', 'Something, Something, You Are Bad', 'Insert Random Insult', 'Yes You Will Get Paid Robertichd', 'Stop It Patrick! You Are Hurting Him', 'Your Intelligence Is An Insult To All Of Humanity', 'Just Kidding... Or Something', 'Char', 'We Ran Out Of Insults', 'Here Is A Cookie For You... Sike You Dumb Fuck', 'Lorem Ipsum', 'Venus Is Short', 'The fact that youre still alive proves that there is no god', 'i want to go home', 'Cat', 'Rat', 'Im Batman!', 'Youre not even good enough for a participation trophy','Semen','Cunt'];
let QuoteYourBad = 'you incompetent piece of shit, this game is incredibly fucking simple, how in the name of all that is holy did you manage to die so quickly... fucking hell';
let QuoteN;
let imgBackground;
let Respawn;
let RespawnPressed;
let TitleScreen;
let TitleScreenPressed;
let StartMenu = 1;
let Game = 0;
let Dead = 0;


function preload() {
  imgMouse = loadImage('Assets/Mouse.png');
  imgMouseInverted = loadImage('Assets/MouseInverted.png');
  imgCat1 = loadImage('Assets/Cat1.png');
  imgCat1Inverted = loadImage('Assets/Cat1Inverted.png');
  imgCat2 = loadImage('Assets/Cat2.png');
  imgCat2Inverted = loadImage('Assets/Cat2Inverted.png');
  imgCheese = loadImage('Assets/Cheese.png');
  BI = [loadImage('Assets/Mike/Baby-Yoda.png'),loadImage('Assets/Mike/IDK.png'),loadImage('Assets/Mike/Mike-1.png'),loadImage('Assets/Mike/Mike-2.png'),loadImage('Assets/Mike/Mike-3.png'),loadImage('Assets/Mike/MikeShrek.png'),loadImage('Assets/Mike/Minion.png'),loadImage('Assets/Mike/Shrek-1.png'),loadImage('Assets/Mike/Shrek.png'),loadImage('Assets/Mike/TMNT-1.png'),loadImage('Assets/Mike/TMNT-2.png'),loadImage('Assets/Mike/Yoda-lego.png'),loadImage('Assets/Mike/Yoda.png')];
  imgBackground = loadImage('Assets/CardBoardBox.jpg');
  Respawn = loadImage('Assets/Respawn.png');
  RespawnPressed = loadImage('Assets/RespawnPressed.png');
  TitleScreen = loadImage('Assets/Title-Screen.png');
  TitleScreenPressed = loadImage('Assets/Title-Screen-Pressed.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  MX = random(MR,width-MR);
  MY = random(MR,height-MR);

  Cat1X = random(imgCat1X,width-imgCat1X);
  Cat1Y = random(imgCat1Y,height-imgCat1Y);
  Cat1HBR = imgCat1Y / 2;

  Cat2X = random(imgCat2X, width-imgCat2X);
  Cat2Y = random(imgCat2Y, height-imgCat2Y);
  Cat2HBR = imgCat2X / 2;

  CX = random((imgCheeseX/2),width-(imgCheeseX/2));
  CY = random((imgCheeseY/2),height-(imgCheeseY/2));
  CHBR = imgCheeseY/2;
  CheeseCounter = 0;
  BIN = random(BI);
  QuoteN = random(Quote);
}

function draw() {
  fill(250);
  if (StartMenu == 1) {
    background(50);
    textAlign(CENTER);
    textSize(100);
    stroke(255);
    strokeWeight(5);
    text('Welcome!',width/2,100);
    fill(255);
    if (mouseX > width/2-400 && mouseX < width/2+400 && mouseY > 250 && mouseY < 350) {
      if (mouseIsPressed === true) {
        StartMenu = 0;
        Game = 1;
      }
      fill(210);
    }
    strokeWeight(2);
    rect(width/2-400,300,800,50);
    noStroke();
    fill(0);
    textSize(50);
    text('Press Here To Start', width/2, 340)
  }
  if (Game == 1) {
    background(imgBackground);
    HBMX = MX+45;
    HBMY = MY+HBMR;
    CHBX = CX + (imgCheeseX/2);
    CHBY = CY + (imgCheeseY/2);
    Cat1HBX = Cat1X + (imgCat1X / 2);
    Cat1HBY = Cat1Y + (imgCat1Y / 2);
    Cat2HBX = Cat2X + (imgCat2X / 2);
    Cat2HBY = Cat2Y + (imgCat2Y / 2);
  
    Cat1SpeedX = ((CatSpeed+0.5)/sqrt((HBMX-Cat1HBX)**2+(HBMY-Cat1HBY)**2)) * (HBMX-Cat1HBX);
    Cat1SpeedY = ((CatSpeed+0.5)/sqrt((HBMX-Cat1HBX)**2+(HBMY-Cat1HBY)**2)) * (HBMY-Cat1HBY);
    Cat2SpeedX = (CatSpeed/sqrt((HBMX-Cat2HBX)**2+(HBMY-Cat2HBY)**2)) * (HBMX-Cat2HBX);
    Cat2SpeedY = (CatSpeed/sqrt((HBMX-Cat2HBX)**2+(HBMY-Cat2HBY)**2)) * (HBMY-Cat2HBY);
    if (keyIsDown(87) || keyIsDown(UP_ARROW)) { // W
      if (MY > 0) {
        MY -= Speed;
      }
    }
    if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) { // S
      if (MY < height-82) {
        MY += Speed;
      }
    }
    if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) { // A
      if (MX > 0) {
        MX -= Speed;
        MRetning = -1;
      }
    }
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) { // D
      if (MX < width-90) {
        MX += Speed;
        MRetning = 1; 
      }
    }

    if (sqrt((HBMX - CHBX)**2 + (HBMY - CHBY)**2) < HBMR + CHBR) {
      CX = random((imgCheeseX/2),width-(imgCheeseX/2));
      CY = random((imgCheeseY/2),height-(imgCheeseY/2));
      CheeseCounter += 1;
      Speed *= 1.015;
      if (CatSpeed < Speed) {
        CatSpeed *= 1.055
      }
    }

    Cat1X += Cat1SpeedX;
    Cat1Y += Cat1SpeedY;
    Cat2X += Cat2SpeedX;
    Cat2Y += Cat2SpeedY; 

    if (sqrt((HBMX-Cat1HBX)**2+(HBMY-Cat1HBY)**2) < Cat1HBR+HBMR || sqrt((HBMX-Cat2HBX)**2+(HBMY-Cat2HBY)**2) < Cat2HBR+HBMR) {
      Cat1X = random(imgCat1X,width-imgCat1X);
      Cat1Y = random(imgCat1Y,height-imgCat1Y); 
      Cat2X = random(imgCat2X, width-imgCat2X);
      Cat2Y = random(imgCat2Y, height-imgCat2Y);
      CatSpeed = 1;
      Dead = 1;
      Game = 0;
      BIN = random(BI);
      QuoteN = random(Quote);
    }
    textSize(32);
    fill(250);
    text(CheeseCounter,50,50);
    image(imgCheese, CX, CY, imgCheeseX, imgCheeseY);
    if (MRetning > 0) {
      image(imgMouse, MX, MY);
    }
    if (MRetning < 0) {
      image(imgMouseInverted, MX, MY);
    }
    if (Cat1SpeedX > 0) {
      image(imgCat1, Cat1X, Cat1Y, imgCat1X, imgCat1Y);
    }
    if (Cat1SpeedX < 0) {
      image(imgCat1Inverted, Cat1X, Cat1Y, imgCat1X, imgCat1Y);
    }
    if (Cat2SpeedX > 0) {
      image(imgCat2, Cat2X, Cat2Y, imgCat2X, imgCat2Y);
    }
    if (Cat2SpeedX < 0) {
      image(imgCat2Inverted, Cat2X, Cat2Y, imgCat2X, imgCat2Y);
    }
  }

  if (Dead == 1) {
    background(BIN);
    textAlign(CENTER);
    textSize(100);
    stroke(0);
    strokeWeight(10);
    text('You Died!',width/2,160);
    textSize(25);
    strokeWeight(5);
    text('Score:', width/2-30,200);
    text(CheeseCounter,width/2+20,202);
    if (CheeseCounter < 1) {text(QuoteYourBad,width/2,300);}
    if (CheeseCounter > 0) {text(QuoteN,width/2,300);}
    strokeWeight(1);
    image(Respawn,width/2-300,500);
    image(TitleScreen, width/2-300, 620);
    if (mouseX > width/2-300 && mouseX < width/2+300 && mouseY > 500 && mouseY < 560) {
      image(RespawnPressed,width/2-300,500);
      if (mouseIsPressed == true) {
        Dead = 0;
        CheeseCounter = 0;
        Game = 1;
      }
    }
    if (mouseX > width/2-300 && mouseX < width/2+300 && mouseY > 620 && mouseY < 690) {
      image(TitleScreenPressed, width/2-300, 620);
      if (mouseIsPressed == true) {
        CheeseCounter = 0;
        Dead = 0;
        StartMenu = 1;
      }
    }
  }
}
