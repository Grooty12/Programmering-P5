let square = [];
let n = 8;
let size = 800;
let Pawn;
let P;

function setup() {
  createCanvas(size, size);
  P = size / n;
  let color;
  textAlign(CENTER);
  for (let j = 0; j * P < height; j++) {
    row1 = [];
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
      row1.push([j * P + 50, i * P + 50, j + i * n + 1]);
      fill(color);
      rect(j * P, i * P, P, P);
      fill(255 - color);
      text(j + i * n + 1, j * P + 50, i * P + 50);
    }
    square.push(row1);
  }
  noFill;
  print(square);
  fill(255);
}
function draw() {}

function DrawBricks(type, place) {
  if (type == "pawn") {
    circle(place[0], place[1], 50);
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
          print(square[i][j][2]);
          break;
        }
      }
    }
  }
}
