let n = 10;
function setup() {
  createCanvas(800, 800);
  for (let j = 0; j < height; j += height / n) {
    for (let i = 0; i < width; i += width / n) {
      if ((i / (width / n)) % 2 == 0) {
        if ((j / (height / n)) % 2 == 0) {
          fill(255);
        } else {
          fill(0);
        }
      } else {
        if ((j / (height / n)) % 2 == 1) {
          fill(255);
        } else {
          fill(0);
        }
      }
      rect(i, j, width / n, height / n);
    }
  }
}
