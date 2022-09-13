let Distance = 50;

function setup() {
  createCanvas(1500, 600);
  for (let i; i < 50; i++) {
    rect(i*5, i*2, i, i, [tl], [tr], [br], [bl]);

  }
}

function draw() {
  background(220);
}
