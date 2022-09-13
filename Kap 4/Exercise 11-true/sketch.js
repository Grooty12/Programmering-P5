let CX;
let CY;
let CR = 50;
let FX;
let FY;
let FB = 50;
let FMX;
let FMY;
let FC;
let OX;
let OY;
let OR = 20;


function setup() {
  createCanvas(1000, 700);
  CX = random(CR,width-CR);
  CY = random(CR,height-CR);
  FX = random(FB,width-FB);
  FY = random(FB,height-FB);
  OX = random(OR,width-OR);
  OY = random(OR, height-OR);
  FC = sqrt((FB/2)**2+(FB/2)**2);
}

function draw() {
  background(220);

  if (keyIsDown(RIGHT_ARROW)) {CX+=3;}
  if (keyIsDown(LEFT_ARROW)) {CX-=3;}
  if (keyIsDown(UP_ARROW)) {CY-=3;}
  if (keyIsDown(DOWN_ARROW)) {CY+=3;}
  if (keyIsDown(68)) {FX+=1;}
  if (keyIsDown(65)) {FX-=1;}
  if (keyIsDown(83)) {FY+=1;}
  if (keyIsDown(87)) {FY-=1;}
  FMX = FX+25;
  FMY = FY+25;

  if (sqrt((CX-OX)**2+(CY-OY)**2) < CR+OR){
    OX = random(OR,width-OR);
    OY = random(OR, height-OR);
  }
  if (sqrt((FMX-OX)**2+(FMY-OY)**2) < 50) {
    OX = random(OR,width-OR);
    OY = random(OR, height-OR);
  }
  circle(FMX,FMY,FC);
  circle(OX,OY,OR*2);
  circle(CX,CY,CR*2);
  rect(FX,FY,FB,FB);
}
