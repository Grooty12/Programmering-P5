function setup() {
  createCanvas(1500,750);
  let mbx=0;
  let mby=0;
}

function draw() {
  background(220);
  if (keyCode == 70) {
     rect(mouseX,mouseY,125,100);

  }
  if (keyCode == 67) {
    circle(mouseX,mouseY,100);
  }
  if (keyCode == 69) {
    ellipse(mouseX,mouseY,100,100);
  }
}
