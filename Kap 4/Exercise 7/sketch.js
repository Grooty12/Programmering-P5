function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (keyIsPressed) {
    if (keyCode == 65) {
      TegnA();
    }
    if (keyCode == 86) {
      TegnV();
    }
  }
}

function TegnA() {
 strokeWeight(20);
 line(100,300,200,50);
 line(300,300,200,50);
 line(100,150,320,150);
}

function TegnV() {
  strokeWeight(20);
  line(100,50,200,300);
  line(300,50,200,300);
}