let square = []; // Det er koordinater til hver firkant.
let n = 8; // Antal firkanter
let size = 800;
let P; // Hvor langt der skal være mellem hver firkant
let bricks = []; // Definerer brikkerne, deres type og deres koordinater
let pawnIMG; // Bonde IMG
let DefineSquares = 0; // Gør så Firkanterne kun bliver defineret 1 gang i draw funktionen

function preload() {
  pawnIMG = loadImage("assets/White/Pawn.png");
}

function setup() {
  createCanvas(size, size);
  P = size / n;
  textAlign(CENTER);
  imageMode(CENTER);
  noFill;
  bricks[0] = ["pawn", 3, 3];
  fill(255);
}
function draw() {
  for (let j = 0; j * P < height; j++) {
    let row1 = [];
    let color;
    for (let i = 0; i * P < width; i++) {
      if (i % 2 == 0) {
        if (j % 2 == 0) {
          color = 255;
        } else {
          color = 0;
        }
      } else {
        if (j % 2 == 1) {
          color = 255;
        } else {
          color = 0;
        }
      }
      if (DefineSquares == 0) {
        row1.push([j * P + 50, i * P + 50, j + i * n + 1]);
      }
      fill(color);
      rect(j * P, i * P, P, P);
      fill(255 - color);
      text(j + i * n + 1, j * P + 50, i * P + 50);
    }
    if (DefineSquares == 0) {
      square.push(row1);
    }
  }
  DefineSquares = 1;
  DrawBricks(bricks[0]);
}

function DrawBricks(brick) {
  if (brick[0] == "pawn") {
    image(
      pawnIMG,
      square[brick[1]][brick[2]][0],
      square[brick[1]][brick[2]][1],
      180 / 4,
      247 / 4
    );
  }
}

function mousePressed() {
  for (let i = 0; i * P < height; i++) {
    for (let j = 0; j * P < width; j++) {
      if (
        mouseX > square[i][j][0] - P / 2 &&
        mouseX < square[i][j][0] + P / 2
      ) {
        if (
          mouseY > square[i][j][1] - P / 2 &&
          mouseY < square[i][j][1] + P / 2
        ) {
          print(square[i][j][2], i, j);
          if (i == bricks[0][1] && j == bricks[0][2]) {
            bricks[0][1] += 2;
          }
          break;
        }
      }
    }
  }
}

function CheckPressBrick(line, row) {}
