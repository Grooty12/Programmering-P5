function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  line(0, height / 2, width, height / 2);
  for (let i = 0; i < 10; i++) {
    let h = random(50, 100);
    let w = random(100);
    let x = random(width);
    let y = random(height / 2 - h / 2, height / 2 + h / 2);
    rect(x, y - h / 2, w, h);
  }
}
