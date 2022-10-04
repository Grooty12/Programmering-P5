function setup() {
  createCanvas(800, 800);
  for (let j = 0; j < 800; j += 100) {
    for (let i = 0; i < 800; i += 100) {
      if ((i / 100) % 2 == 0) {
        if ((j / 100) % 2 == 0) {
          fill(255);
        } else {
          fill(0);
        }
      } else {
        if ((j / 100) % 2 == 1) {
          fill(255);
        } else {
          fill(0);
        }
      }
      rect(i, j, 100, 100);
    }
  }
}
