let square = [];
let a = "A";
let b = "B";
let c = "C";
let d = "D";
let e = "E";
let f = "F";
let g = "G";
let h = "H";
let n = 8;
let size = 800;
function setup() {
  createCanvas(size, size);
  let P = size / n;
  let square1;
  let square2 = [];
  for (let j = 0; j * P < height; j++) {
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
      let JPmorgan = j * P + P / 2;
      square2[i] = [JPmorgan, i * P + P / 2];
      rect(j * P, i * P, P, P);
    }
    square1 = char(j + 65);
    print("j * P + (P / 2) =", j * P + P / 2);
    square[square1] = square2;
    print(square2);
  }

  imageMode(CENTER);
  print("square[a][1] = ", square["A"][5]);
  print("square = ", square);
}

function draw() {
  DrawBricks("pawn", square[a][1]);
}

function DrawBricks(type, place) {
  if (type == "pawn") {
    circle(place[0], place[1], 50);
  }
}
