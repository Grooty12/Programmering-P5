function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    let x = 0;
    let y = random(height);
    let r = random(100);
    let g = i % 2;
    if (g == 1) {
      x = random(width / 2 + 100, width);
    } else {
      x = random(0, width / 2 - 100);
    }
    circle(x, y, r);
    text(i, x, y);
  }
}
