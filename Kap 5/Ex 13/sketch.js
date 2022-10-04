let angle = 0;
let x = 50;
let y = 50;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES); // Skifter angle fra radianer til grader
  fill("pink"); // fill farven pink
  noStroke();
  frameRate(1);
}

function draw() {
  background("yellow"); // Baggrund gul
  translate(x, y); // Det vi sige, nu hvor y = 50, så går den 50 ned. Og nu hvor x = 50, går den 50 hen, men fordi x bliver større nedenfor, bevæger den sig til siden. Det er den vektor den skal forskydes med.
  rotate(angle); // Roterer tingene med "angle" grader
  ellipseMode(CENTER); // Er default. Gør så man bruger r som diameter.

  x = x + 2; // Gør x 2 pixels større så den bevæger sig
  angle = angle + 4; // Gør vinklen større så den bliver roteret.
  for (var row = 3; row <= width; row = row + 50) {
    for (var col = 3; col <= height; col = col + 50) {
      ellipse(row, col, 20, 20);
    }
  }
}
