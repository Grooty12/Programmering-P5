let turn = 0;
let taken = [];
let size;
let type = [];
let IsTaken;
let IN = [];
let JN = [];
let Places = []
let n;
let Game;

function setup() {
  createCanvas(600, 600);
  Game = 1;
  size = width / 3;
  background(255);
  strokeWeight(3)
  taken[0] = [99, 99];
  for (let i = 1; i <= 3; i++) {
    line(i * size, 0, i * size, height);
    line(0, i * size, width, i * size)
    for (let j = 0; j < 3; j++) {
      n = i + (j * 3)
      taken[n] = [i, j]
    }
  }
}

function mousePressed() {
  if (Game == 1) {
    for (let i = 0; i < 3; i++) {
      IsTaken = 0;
      for (let j = 0; j < 3; j++) {
        n = i + (j * 3)
        if (mouseX > i * size && mouseX < (i + 1) * size) {
          if (mouseY > j * size && mouseY < (j + 1) * size) {
            for (let k = 0; k <= n; k++) {
              if (taken[n][2] == 0 || taken[n][2] == 1) {
                print("break", n)
                IsTaken = 1;
              }
            }
            if (IsTaken == 0) {
              if (turn == 0) {
                circle(i * size + (size / 2), j * size + (size / 2), 100)
                taken[n] = [i, j, turn]
                turn = 1;
                break;
              } else {
                line(i * size, (j + 1) * size, (i + 1) * size, j * size)
                line(i * size, j * size, (i + 1) * size, (j + 1) * size);
                n = i + (j * 3)
                taken[n] = [i, j, turn]
                turn = 0;
                break;
              }
            }
          }
        }
      }
    }
  }
}
function draw() {
  for (let x = 0; x < 3; x++) {
    let n0 = (x * 3)
    let n1 = x
    for (let b = 0; b < 2; b++) {
      if (taken[n0][2] == b && taken[n0 + 1][2] == b && taken[n0 + 2][2] == b) {
        strokeWeight(10)
        line(0, x * size + (size / 2), width, x * size + (size / 2))
        PrintText();
        if (keyIsDown(82)) {
          restart();
          break;
        }
      }
      if (taken[n1][2] == b && taken[n1 + (3)][2] == b && taken[n1 + 6][2] == b) {
        strokeWeight(10)
        line(x * size + (size / 2), 0, x * size + (size / 2), height)
        PrintText();
        if (keyIsDown(82)) {
          restart();
          break;
        }
      }
      if (taken[0][2] == b && taken[4][2] == b && taken[8][2] == b) {
        strokeWeight(10)
        line(0, 0, width, height)
        PrintText();
        if (keyIsDown(82)) {
          restart();
          break;
        }
      }
      if (taken[2][2] == b && taken[4][2] == b && taken[6][2] == b) {
        strokeWeight(10)
        line(0, height, width, 0)
        PrintText();
        if (keyIsDown(82)) {
          restart();
          break;
        }
      }
    }
  }
}

function PrintText() {
  textAlign(CENTER);
  textSize(60);
  fill(255)
  stroke(0)
  strokeWeight(5)
  text("Game Over", width / 2, 200);
  text("Press 'R' To Restart", width / 2, 400)
  Game = 0
}
function restart() {
  turn = 0;
  taken = [];
  type = [];
  IsTaken;
  IN = [];
  JN = [];
  Places = []
  n = 0;
  setup()
}
