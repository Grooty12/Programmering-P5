let K0B = 50000;
let K0A = 50000;
let rB = 0.5 / 100;
let rA = 7 / 100;
let KnBT = 50000;
let KnAT = 50000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  translate(0, height - 200);
  stroke("red");
  beginShape(LINES);
  for (let i = 0; i < 100; i++) {
    let KnB = K0B * (1 - rB) ** i;
    K0B = KnB;
    vertex((i - 1) * 25, -KnBT / 10000);
    vertex(i * 25, -KnB / 10000);
    KnBT = KnB;
  }
  endShape(LINES);
  stroke("green");
  beginShape(LINES);
  for (let i = 0; i < 100; i++) {
    let KnA = K0A * (1 + rA) ** i;
    K0A = KnA;
    vertex((i - 1) * 25, -KnAT / 10000);
    vertex(i * 25, -KnA / 10000);
    KnAT = KnA;
  }
  endShape(LINES);
}
