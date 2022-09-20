let i = 0;
function setup() {
  createCanvas(400, 400);
  while (i < 100) {
    let x = random(400);
    let y = random(400);
    let r = random(100);
    circle(x, y, r); // Tegner en cirkel i x,y med r som radius
    text(i, x, y); // Inde i cirklen skrives i
    i = i + 1;
  }
}
// Den laver basically 100 tilfældige cirkler (og skriver hvilken nummer cirkel den er inde i den).
