function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseX < width/2) {
    circle(200,200,100);
  }
  else if (mouseX > width/2){
    rect(150, 150, 100, 100);
  }
}
