function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  strokeWeight(10);
  for (let i = 0; i < 10; i++) {
    stroke(random(250), random(250), random(250));
    x = random(width);
    y = random(height);
    point(x, y);
  }
}
