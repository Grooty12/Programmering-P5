function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(250);
  let j = 0;
  let x = width / 2;
  let y = height / 2;
  let r = 0;
  for (let i = 0; i < 15; i++) {
    while (j < 2) {
      r += 1;
      circle(x, y, r);
      j += 1;
    }
  }
}
