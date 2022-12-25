let display;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  translate(50, 50);
  drawCalculator();
}

function drawCalculator() {
  noStroke();
  fill(50);
  rect(0, 0, 750, 500, 20);
  fill(60);
  rect(20, 20, 710, 75, 10);
  display = createElement("h1", "Input your stuff!!");
  display.position(80, 60);
}
