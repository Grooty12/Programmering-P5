let fx = { a: 2, b: 40 };

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  translate(width / 2, height / 2);
  line(-(width / 2), 0, width / 2, 0);
  line(0, -(height / 2), 0, height / 2);
  strokeWeight(3);
  angleMode(DEGREES);

  line(
    -width / 2,
    (width / 2) * fx.a - fx.b,
    width / 2,
    (-width / 2) * fx.a - fx.b
  );
  for (let i = -1000; i < 1000; i++) {
    // Andengradsfunktion
    stroke("red");
    point(i, -(i ** 2));
    stroke("blue");
    point(i, -Math.sqrt(i));
    stroke("green");
    point(i, -(1000 / i));
    stroke("pink");
    point(i, -Math.cos(i) - 200);
    stroke("Yellow");
    point(i, -Math.sin(i) + 200);
  }
}
