function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    let x = random(0, width);
    let y = random(height);
    let r = random(100);
    let g = i % 2;
    fill(250);
    if (g == 0) {
      fill(250, 0, 0);
      circle(x, y, r);
      fill(0);
      text(i, x, y);
    }
  }
}
