function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  let x = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      x = random(width / 2 - 20);
    } else {
      x = random(width / 2 + 20, width);
    }
    text(i, x, random(height));
  }
}
