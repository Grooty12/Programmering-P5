let ManHead = [200, 300];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  CreateMan();
}

function CreateMan() {
  circle(ManHead[0], ManHead[1], 50);
  line(ManHead[0], ManHead[1] + 25, ManHead[0], ManHead[1] + 100);
  line(ManHead[0], ManHead[1] + 35, ManHead[0] + 50, ManHead[1] - 10);
  line(ManHead[0], ManHead[1] + 35, ManHead[0] - 50, ManHead[1] - 10);
  line(ManHead[0], ManHead[1] + 100, ManHead[0] + 50, ManHead[0] + 120);
  print("Done");
}
