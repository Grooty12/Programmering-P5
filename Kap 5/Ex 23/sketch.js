function setup() {
  createCanvas(400, 400);
  background(255);
  let cirkler = [];
  let OverLap = [];
  for (let i = 0; i < 20; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let r1 = random(40, 100);
    cirkel = [x1, y1, r1];
    cirkler.push(cirkel);
    circle(x1, y1, r1);
    text(i, x1, y1);
  }
  for (let i = 0; i < cirkler.length; i++) {
    for (let j = 0; j < cirkler.length; j++) {
      if (!(i == j)) {
        let afstand = Math.sqrt(
          (cirkler[i][0] - cirkler[j][0]) ** 2 +
            (cirkler[i][1] - cirkler[j][1]) ** 2
        );
        let radius = (cirkler[i][2] + cirkler[j][2]) / 2;
        if (afstand < radius) {
          OverLap.push([i, j]);
        }
      }
    }
  }
  print(OverLap);
}
