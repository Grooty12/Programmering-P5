let square = [];
let n = 8;
let size = 800;
let pawnIMG;
function preload() {
  pawnIMG = loadImage('assets/White/Pawn.png')
}
function setup() {
  createCanvas(size, size);
  let P = size / n;
  for (let j = 0; j * P < height; j++) {
    row1 = [];
    for (let i = 0; i * P < width; i++) {
      if (i % 2 == 0) {
        if (j % 2 == 0) {
          fill(255);
        } else {
          fill(0);
        }
      } else {
        if (j % 2 == 1) {
          fill(255);
        } else {
          fill(0);
        }
      }
      row1.push([j * P + 50, i * P + 50, j + (i * n) + 1]);
      rect(j * P, i * P, P, P);
    }
    square.push(row1);
  }
  imageMode(CENTER);
}
function draw() {
  DrawBricks("pawn", square[3][3])
}

function DrawBricks(type, place) {
  if (type == "pawn") {
    image(pawnIMG, place[0], place[1], 100, 100);
    print(place[2])
  }
}
