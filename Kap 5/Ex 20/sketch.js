let fx = { a: 2, b: 40 }
let gx = { a: 1, b: 2, c: 5 }


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  translate(width / 2, height / 2);
  line(-(width / 2), 0, width / 2, 0);
  line(0, -(height / 2), 0, height / 2);
  strokeWeight(3);
  for (let i = 0; i < 1000; i++) {
    // Ret linje
    point(i, -(i * fx.a + fx.b));
    point(-i, i * fx.a - fx.b);
    // Andengradsfunktion
    point(i, -(gx.a * (i ** 2) + gx.b * i + gx.c))
    point(-i, -(gx.a * (i ** 2) + gx.b * i + gx.c))
  }
}
