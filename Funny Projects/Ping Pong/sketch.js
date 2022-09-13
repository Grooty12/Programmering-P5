let bx;
let by;
let bxspeed;
let byspeed;
let s1x;
let s1y;
let s2x;
let s2y;
let s1y2;
let s2y2;
let lh=80;
let p1=0;
let p2=0;
let font,
  fontsize = 40;
let pause=-1;

function setup() {
  createCanvas(700, 700);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  bx=width/2;
  by=height/2;
  bxspeed=random(-3,3);
  byspeed=random(-3,3);
  s1x=20;
  s2x=width-40;
  s1y=height/2-20;
  s2y=height/2-20;
}

function draw() {
  background(220);
  strokeWeight(20);
  circle(bx,by,20);
  strokeWeight(10);
  rect(s1x,s1y,10,80);
  rect(s2x,s2y,10,80);
  play();
  drawWords();
  if(keyIsPressed) {
    if (keyCode == 82) {
      reset();
      p1=0;
      p2=0;
    }
  }
  if (bx > width) {
    reset();
    p2=p2+1;
  }
  if (bx < 0) {
    reset();
    p1=p1+1;
  }
}

function drawWords() {

  fill(0);
  text(p1, width*0.75, 80);
  text(p2, width*0.25, 80)
}

function reset() {
  bx=width/2;
  by=height/2;
  bxspeed=random(-3,3);
  byspeed=random(-3,3);
}

function play() {
  bx+=bxspeed;
  by+=byspeed;
  if (keyIsPressed){
    if(keyCode == 87 && s1y != 0){
      s1y=s1y-5;
    }
    if(keyCode == 83 && s1y != height-lh){
      s1y=s1y+5
    }
    if(keyCode == DOWN_ARROW && s2y != height-lh){
      s2y=s2y+5;
    }
    if(keyCode == UP_ARROW && s2y != 0){
      s2y=s2y-5;
    }

  }
  if (bx < s1x+25 && by > s1y-25 && by < s1y+lh+25){
    bxspeed=-(bxspeed);
    bxspeed=bxspeed*1.1;
    byspeed=byspeed*1.1;
  }
  if (bx > s2x-25 && by > s2y-25 && by < s2y+lh+25){
    bxspeed=-(bxspeed);
    bxspeed=bxspeed*1.1;
    byspeed=byspeed*1.1;
  }
  if (by < 25 || by < s1y-5 && by > s1y-15 && bx < s1x+25|| by < s2y-5 && by > s2y-15 && bx > s2x-25) {
    byspeed=-byspeed;
  }
  if (by > height-25 || by > s1y+lh+5 && by < s1y+lh+15 && bx < s1x+25 || by > s2y+lh+5 && by < s2y+lh+15 && bx > s2x-25){
    byspeed=-byspeed;
  }
}