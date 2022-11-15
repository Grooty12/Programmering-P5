function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  translate(width / 2, height / 2);
  line(-(width / 2), 0, width / 2, 0);
  line(0, -(height / 2), 0, height / 2);
  strokeWeight(3);
  angleMode(DEGREES);

  line(-width / 2, (width / 2) * 2 - 40, width / 2, (-width / 2) * 2 - 40);
  for (let i = -1000; i < 1000; i++) {
    // Andengradsfunktion
    stroke("red");
    line(i - 1, -((i - 1) ** 2), i, -(i ** 2));
    stroke("blue");
    line(i - 1, -Math.sqrt(i - 1), i, -Math.sqrt(i));
    stroke("green");
    line(i - 1, -(1000 / (i - 1)));
    stroke("pink");
    line(i - 1, -Math.cos(i - 1) - 200, i, -Math.cos(i) - 200);
    stroke("Yellow");
    line(i - 1, -Math.sin(i - 1) + 200, i, -Math.sin(i) + 200);
  }
}
