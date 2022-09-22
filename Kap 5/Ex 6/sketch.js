let n = 10;
let j = 0;
let r;
let n2 = 0;

function setup() {
  frameRate(1);
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < n; i++) {
    r = random(20, 100);
    fill(random(251), random(251), random(251));
    circle(random(r / 2, width - r / 2), random(r / 2, height - r / 2), r);
    n2 += 1;
    print(n2);
  }
  while (j < n) {
    r = random(20, 100);
    fill(random(251), random(251), random(251));
    circle(random(r / 2, width - r / 2), random(r / 2, height - r / 2), r);
    n2 += 1;
    print(n2);
    j++;
  }
}
