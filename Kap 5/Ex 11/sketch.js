let n = 8;
let size = 800;

function setup() {
  createCanvas(size, size);
  let P = size / n;
  for (let j = 0; j * P < height; j++) {
    for (let i = 0; i * P < width; i++) {
      if (i % 2 == 0) {
        if (j % 2 == 0) {
          fill(255);
        } else {
          fill(0);
        }
      } else {
        if (j % 2 == 1) {
          fill(255);
        } else {
          fill(0);
        }
      }
      rect(i * P, j * P, P, P);
    }
  }
}

function draw() {
  fill(255);
  for (let i = 0; i < n; i++) {
    circle();
  }
}

function mousePressed() {}
