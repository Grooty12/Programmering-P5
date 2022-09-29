let Gravity = 10;
let x = 200;
let y = 200;
let JS = 0;
let R = 40;
let MSpeed = 5;
let Jump = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  noFill();
  line(0,height-200,width,height-200);
  if (keyIsDown(65)) {
    x -= MSpeed;
  }
  if (keyIsDown(68)) {
    x += MSpeed;
  }
  if (keyIsDown(32) && Jump == 0) {
    JS = 32;
    Jump = 1;
  }
  y -= JS;
  if (y+R < height-200) {
    y += Gravity;
  }

  if (y+R >= height-200) {
    Jump = 0;
  }
  if (JS > 0) {
    JS *= 0.93;
  }
  else if (JS < 0) {
    JS = 0;
  }
  circle(x,y,R*2);

}
