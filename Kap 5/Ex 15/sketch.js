function setup() {
  let b = 0;
  createCanvas(windowWidth, windowHeight);
  for (let i = 1; i < 101; i++) {
    b += i;
    print(b);
  }
}
