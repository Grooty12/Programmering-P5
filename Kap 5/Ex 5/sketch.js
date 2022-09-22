let n = 30;
let j = 0;

function setup() {
  frameRate(1);
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <= n; i++) {
    circle(width / 2 - 200, height / 2, i + 100);
    print("i = ", i);
  }
  while (j <= n) {
    circle(width / 2 + 200, height / 2, j + 100);
    print("j = ", j);
    j++;
  }
}
