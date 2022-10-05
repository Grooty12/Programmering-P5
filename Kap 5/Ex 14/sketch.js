function setup() {
  createCanvas(720, 400);
  background(200);
  translate(100, 100); // Placere alle fremtidige ting i 100 * 100
  noStroke();
  for (let i = 0; i < 10; i++) {
    // for løkke op til 10.
    ellipse(0, 30, 20, 80); // Laver en ellipse.
    rotate(PI / 4); // Roterer den med 1/8 cirkel
  }
}
