let ManHead = [200, 300];
let kast = 0;
let v0 = 65;
let g = -9.82;
let VR = 45;
let V;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  CreateMan();
  rect(ManHead[0] + 500, ManHead[1] + 75, 100, 100);
  V = radians(VR);
}

function CreateMan() {
  circle(ManHead[0], ManHead[1], 50);
  line(ManHead[0], ManHead[1] + 25, ManHead[0], ManHead[1] + 100);
  line(ManHead[0], ManHead[1] + 35, ManHead[0] + 50, ManHead[1] - 10);
  line(ManHead[0], ManHead[1] + 35, ManHead[0] - 50, ManHead[1] - 10);
  line(ManHead[0], ManHead[1] + 100, ManHead[0] + 40, ManHead[0] + 240);
  line(ManHead[0], ManHead[1] + 100, ManHead[0] - 40, ManHead[0] + 240);
  print("Done");
}

function parabel() {
  for (let i = 0; i < 400; i++) {
    let v0x = Math.cos(V) * v0;
    let v0y = Math.sin(V) * v0;
    let Sy = -((1 / 2) * g * i ** 2 + v0y * i);
    let Sx = v0x * i;
    strokeWeight(5);
    point(Sx + ManHead[0] + 40, Sy + ManHead[1] - 10);
    print("Done");
  }
}

function keyPressed() {
  if (keyIsDown(75)) {
    parabel();
  }
  if (keyIsDown(82)) {
    setup();
  }
}
