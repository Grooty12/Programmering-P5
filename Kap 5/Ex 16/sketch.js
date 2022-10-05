let Names = [
  "Jakob",
  "Herman The Planet",
  "Saitama",
  "Reanu Keeves",
  "Mockerbeard",
  "Jöhan",
  "Grandma Berta",
  "Evald",
  "Denice",
  "Catherine",
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0);
  for (let i = 0; i < Names.length; i++) {
    let Picked = Names[i];
    let Length = Picked.length * 3;
    textSize(10);
    textSize(Length);
    text(Picked, random(0, width - 400), random(50, height - 50));
  }
}
