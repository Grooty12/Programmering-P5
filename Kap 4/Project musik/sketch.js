// Guitar Strings and Picture
let String1;
let String1X = 175;
let String1Y = 220;
let String1W = 800;
let String1H = 5;

let String2;
let String2X = 175;
let String2Y = 210;
let String2W = 800;
let String2H = 5;

let String3;
let String3X = 175;
let String3Y = 199;
let String3W = 800;
let String3H = 5;

let String4;
let String4X = 175;
let String4Y = 188.5;
let String4W = 800;
let String4H = 5;

let String5;
let String5X = 175;
let String5Y = 178;
let String5W = 800;
let String5H = 5;

let String6;
let String6X = 175;
let String6Y = 167.5;
let String6W = 800;
let String6H = 5;

let imgGuitar;

// Piano things
let PianoWW = 25;
let PianoWB = 15;
let PianoHW = 100;
let PianoHB = 60;
let PianoY = 650;

let Piano1;
let Piano1X = 100;
let Piano2;
let Piano2X = 125;
let Piano3;
let Piano3X = 140;
let Piano4;
let Piano4X = 165;
let Piano5;
let Piano5X = 180;
let Piano6;
let Piano6X = 205;
let Piano7;
let Piano7X = 220;
let Piano8;
let Piano8X = 245;
let Piano9;
let Piano9X = 260;
let Piano10;
let Piano10X = 285;
let Piano11;
let Piano11X = 300;
let Piano12;
let Piano12X = 325;
let Piano13;
let Piano13X = 340;
let Piano14;
let Piano14X = 365;
let Piano15;
let Piano15X = 380;

// Drums
let BassDrum;
let BassDrumX = 1200;
let BassDrumY = 800;
let BassDrumD = 150;

let SnareDrum;
let SnareDrumX = 1075;
let SnareDrumY = 750;
let SnareDrumD = 100;

let FloorTom;
let FloorTomX = 1320;
let FloorTomY = 750;
let FloorTomD = 90;

let LowTomTom;
let LowTomTomX = 1240;
let LowTomTomY = 670;
let LowTomTomD = 75;

let HighTomTom;
let HighTomTomX = 1140;
let HighTomTomY = 670;
let HighTomTomD = 60;

let HighHat;
let HighHatX = 1020;
let HighHatY = 650;
let HighHatD = 72;

let RideCymbal;
let RideCymbalX = 1350;
let RideCymbalY = 650;
let RideCymbalD = 90;

let CrashCymbal;
let CrashCymbalX = 1090;
let CrashCymbalY = 600;
let CrashCymbalD = 80;

function preload() {
  // Guitar
  String1 = loadSound('Assets/Guitar/String1.mp3');
  String2 = loadSound('Assets//Guitar/String2.mp3');
  String3 = loadSound('Assets/Guitar/String3.mp3');
  String4 = loadSound('Assets/Guitar/String4.mp3');
  String5 = loadSound('Assets/Guitar/String5.mp3');
  String6 = loadSound('Assets/Guitar/String6.mp3');
  imgGuitar = loadImage('Assets/Guitar/Guitar.png');

  // Piano
  Piano1 = loadSound('Assets/Piano/Piano1.mp3');
  Piano2 = loadSound('Assets/Piano/Piano2.mp3');
  Piano3 = loadSound('Assets/Piano/Piano3.mp3');
  Piano4 = loadSound('Assets/Piano/Piano4.mp3');
  Piano5 = loadSound('Assets/Piano/Piano5.mp3');
  Piano6 = loadSound('Assets/Piano/Piano6.mp3');
  Piano7 = loadSound('Assets/Piano/Piano7.mp3');
  Piano8 = loadSound('Assets/Piano/Piano8.mp3');
  Piano9 = loadSound('Assets/Piano/Piano9.mp3');
  Piano10 = loadSound('Assets/Piano/Piano10.mp3');
  Piano11 = loadSound('Assets/Piano/Piano11.mp3');
  Piano12 = loadSound('Assets/Piano/Piano12.mp3');
  Piano13 = loadSound('Assets/Piano/Piano13.mp3');
  Piano14 = loadSound('Assets/Piano/Piano14.mp3');
  Piano15 = loadSound('Assets/Piano/Piano15.mp3');

  // Drums
  BassDrum = loadSound('Assets/Drums/BassDrum.mp3');
  SnareDrum = loadSound('Assets/Drums/SnareDrum.mp3');
  FloorTom = loadSound('Assets/Drums/FloorTom.mp3');
  LowTomTom = loadSound('Assets/Drums/LowTomTom.mp3');
  HighTomTom = loadSound('Assets/drums/HighTomTom.mp3');
  HighHat = loadSound('Assets/Drums/HighHat.mp3');
  RideCymbal = loadSound('Assets/Drums/RideCymbal.mp3');
  CrashCymbal = loadSound('Assets/drums/CrashCymbal.mp3');
}

function setup() {
  createCanvas(1600, 950);

}

function draw() {
  background(50);
  // Guitar
  image(imgGuitar,0,0,2400/2,778/2);
  if (mouseX > String1X && mouseX < String1X + String1W && mouseY > String1Y && mouseY < String1Y + String1H) { // String 1
    String1.play();
  }
  if (mouseX > String2X && mouseX < String2X + String2W && mouseY > String2Y && mouseY < String2Y + String2H) { // String 2
    String2.play();
  }
  if (mouseX > String3X && mouseX < String3X + String3W && mouseY > String3Y && mouseY < String3Y + String3H) { // String 3
    String3.play();
  }
  if (mouseX > String4X && mouseX < String4X + String4W && mouseY > String4Y && mouseY < String4Y + String4H) { // String 4
    String4.play();
  }
  if (mouseX > String5X && mouseX < String5X + String5W && mouseY > String5Y && mouseY < String5Y + String5H) { // String 5
    String5.play();
  }
  if (mouseX > String6X && mouseX < String6X + String6W && mouseY > String6Y && mouseY < String6Y + String6H) { // String 6
    String6.play();
  }
  
  // Piano
  noStroke();
  fill(250); // White Piano
  rect(Piano1X, PianoY, PianoWW, PianoHW);
  rect(Piano3X, PianoY, PianoWW, PianoHW);
  rect(Piano5X, PianoY, PianoWW, PianoHW);
  rect(Piano7X, PianoY, PianoWW, PianoHW);
  rect(Piano9X, PianoY, PianoWW, PianoHW);
  rect(Piano11X, PianoY, PianoWW, PianoHW);
  rect(Piano13X, PianoY, PianoWW, PianoHW);
  rect(Piano15X, PianoY, PianoWW, PianoHW);

  
  fill(10); // Black Piano
  rect(Piano2X, PianoY, PianoWB, PianoHB);
  rect(Piano4X, PianoY, PianoWB, PianoHB);
  rect(Piano6X, PianoY, PianoWB, PianoHB);
  rect(Piano8X, PianoY, PianoWB, PianoHB);
  rect(Piano10X, PianoY, PianoWB, PianoHB);
  rect(Piano12X, PianoY, PianoWB, PianoHB);
  rect(Piano14X, PianoY, PianoWB, PianoHB);

  // Drums
  fill(250);
  stroke(1);
  strokeWeight(5);
  circle(BassDrumX, BassDrumY, BassDrumD);
  circle(SnareDrumX, SnareDrumY, SnareDrumD);
  circle(FloorTomX, FloorTomY, FloorTomD);
  circle(LowTomTomX, LowTomTomY, LowTomTomD);
  circle(HighTomTomX, HighTomTomY, HighTomTomD);
  // Drum Other stuff
  noStroke();
  fill(255, 153, 102);
  circle(HighHatX, HighHatY, HighHatD);
  circle(RideCymbalX, RideCymbalY, RideCymbalD);
  circle(CrashCymbalX, CrashCymbalY, CrashCymbalD);
}

function mousePressed() {
  // Piano White
  if (mouseX > Piano1X && mouseX < Piano1X + PianoWW && mouseY > PianoY && mouseY < PianoY + PianoHW) {
    Piano1.play();
  }
  if (mouseX > Piano3X && mouseX < Piano3X + PianoWW && mouseY > PianoY && mouseY < PianoY + PianoHW) {
    Piano3.play();
  }
  if (mouseX > Piano5X && mouseX < Piano5X + PianoWW && mouseY > PianoY && mouseY < PianoY + PianoHW) {
    Piano5.play();
  }
  if (mouseX > Piano7X && mouseX < Piano7X + PianoWW && mouseY > PianoY && mouseY < PianoY + PianoHW) {
    Piano7.play();
  }
  if (mouseX > Piano9X && mouseX < Piano9X + PianoWW && mouseY > PianoY && mouseY < PianoY + PianoHW) {
    Piano9.play();
  }
  if (mouseX > Piano11X && mouseX < Piano11X + PianoWW && mouseY > PianoY && mouseY < PianoY + PianoHW) {
    Piano11.play();
  }
  if (mouseX > Piano13X && mouseX < Piano13X + PianoWW && mouseY > PianoY && mouseY < PianoY + PianoHW) {
    Piano13.play();
  }
  if (mouseX > Piano15X && mouseX < Piano15X + PianoWW && mouseY > PianoY && mouseY < PianoY + PianoHW) {
    Piano15.play();
  }
  // Piano Black
  if (mouseX > Piano2X && mouseX < Piano2X + PianoWB && mouseY > PianoY && mouseY < PianoY + PianoHB) {
    Piano2.play();
  }
  if (mouseX > Piano4X && mouseX < Piano4X + PianoWB && mouseY > PianoY && mouseY < PianoY + PianoHB) {
    Piano4.play();
  }
  if (mouseX > Piano6X && mouseX < Piano6X + PianoWB && mouseY > PianoY && mouseY < PianoY + PianoHB) {
    Piano6.play();
  }
  if (mouseX > Piano8X && mouseX < Piano8X + PianoWB && mouseY > PianoY && mouseY < PianoY + PianoHB) {
    Piano8.play();
  }
  if (mouseX > Piano10X && mouseX < Piano10X + PianoWB && mouseY > PianoY && mouseY < PianoY + PianoHB) {
    Piano10.play();
  }
  if (mouseX > Piano12X && mouseX < Piano12X + PianoWB && mouseY > PianoY && mouseY < PianoY + PianoHB) {
    Piano12.play();
  }
  if (mouseX > Piano14X && mouseX < Piano14X + PianoWB && mouseY > PianoY && mouseY < PianoY + PianoHB) {
    Piano14.play();
  }

  // Drums
  if (sqrt((mouseX-BassDrumX)**2+(mouseY-BassDrumY)**2) < BassDrumD/2) {
    BassDrum.play();
  }
  if (sqrt((mouseX-SnareDrumX)**2+(mouseY-SnareDrumY)**2) < SnareDrumD/2) {
    SnareDrum.play();
  }
  if (sqrt((mouseX-FloorTomX)**2+(mouseY-FloorTomY)**2) < FloorTomD/2) {
    FloorTom.play();
  }
  if (sqrt((mouseX-LowTomTomX)**2+(mouseY-LowTomTomY)**2) < LowTomTomD/2) {
    LowTomTom.play();
  }
  if (sqrt((mouseX-HighTomTomX)**2+(mouseY-HighTomTomY)**2) < HighTomTomD/2) {
    HighTomTom.play();
  }
  if (sqrt((mouseX-HighHatX)**2+(mouseY-HighHatY)**2) < HighHatD/2) {
    HighHat.play();
  }
  if (sqrt((mouseX-RideCymbalX)**2+(mouseY-RideCymbalY)**2) < RideCymbalD/2) {
    RideCymbal.play();
  }
  if (sqrt((mouseX-CrashCymbalX)**2+(mouseY-CrashCymbalY)**2) < CrashCymbalD/2) {
    CrashCymbal.play();
  }
}