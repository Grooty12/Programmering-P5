let j = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    fill(random(250), random(250), random(250));
    let x = random(width / 2);
    let y = random(height);
    rect(x, y, 50, 50);
  }
  while (j < 10) {
    fill(random(250), random(250), random(250));
    let x = random(width / 2, width);
    let y = random(height);
    rect(x, y, 50, 50);
    j += 1;
  }
  textAlign(CENTER);
  text("For", width / 4, 50);
  text("While", (width * 3) / 4, 50);
}
