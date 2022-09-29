let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  while (i < 100) {
    let x = random(0, width);
    let y = random(height);
    let r = random(100);
    let g = i % 2;
    if (g == 1) {
      fill(0, 0, 250);
      circle(x, y, r);
      fill(0);
      text(i, x, y);
    }
    i = i + 1;
  }
}
