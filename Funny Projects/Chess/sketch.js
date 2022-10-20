let square = []; // Det er koordinater til hver firkant.
let brick = []; // Definerer brikkerne, deres type og deres koordinater
let n = 8; // Antal firkanter
let size = 800;
let P; // Hvor langt der skal være mellem hver firkant
let pawnIMG; // Bonde IMG
let pawnIMGR = [180 / 3, 247 / 3];
let IMG = [
  [0, 0, 255 / 3, 277 / 3],
  [0, 0, 255 / 3, 277 / 3],
  [0, 0, 291 / 3, 272 / 3],
  [0, 0, 212 / 3, 247 / 3],
  [0, 0, 271 / 3, 291 / 3],
  [0, 0, 252 / 3, 249 / 3],
  [0, 0, 180 / 3, 247 / 3],
];
let DefineSquares = 0; // Gør så Firkanterne kun bliver defineret 1 gang'
let BrickPressed = [];
let PawnAttack = 0;

function preload() {
  IMG[0][2] = loadImage("assets/Blank.png");
  IMG[0][1] = loadImage("assets/Blank.png");
  IMG[1][0] = loadImage("assets/White/King.png");
  IMG[1][1] = loadImage("assets/Black/King.png");
  IMG[2][0] = loadImage("assets/White/Queen.png");
  IMG[2][1] = loadImage("assets/Black/Queen.png");
  IMG[3][0] = loadImage("assets/White/Rook.png");
  IMG[3][1] = loadImage("assets/Black/Rook.png");
  IMG[4][0] = loadImage("assets/White/Bishop.png");
  IMG[4][1] = loadImage("assets/Black/Bishop.png");
  IMG[5][0] = loadImage("assets/White/Knight.png");
  IMG[5][1] = loadImage("assets/Black/Knight.png");
  IMG[6][0] = loadImage("assets/White/Pawn.png");
  IMG[6][1] = loadImage("assets/Black/Pawn.png");
}

function setup() {
  createCanvas(size, size);
  P = size / n;
  textAlign(CENTER); // Gør så tekst skrives i midten af coords
  imageMode(CENTER); // Samme bare med billeder
  noFill;
  fill(255);
  DrawSquares();
  DefineSquares = 1; // Til de ting, som kun skal køre 1 gang
  DefineBricks();
  DrawBricks(99);
}
function DefineBricks() {
  // King
  brick[4][0] = 1;
  brick[4][1] = 1;
  brick[59][0] = 1;
  brick[59][1] = 0;
  // Queen
  brick[3][0] = 2;
  brick[3][1] = 1;
  brick[60][0] = 2;
  brick[60][1] = 0;
  for (let i = 0; i < 2; i++) {
    // Rook, Knight and Bishop
    // Rook
    let number = i * 7 + 7 * n;
    brick[number][0] = 3;
    brick[number][1] = 0;
    number = i * 7 + 0 * n;
    brick[number][0] = 3;
    brick[number][1] = 1;
    // Bishop
    number = i * 3 + 0 * n + 2;
    brick[number][0] = 4;
    brick[number][1] = 1;
    number = i * 3 + 7 * n + 2;
    brick[number][0] = 4;
    brick[number][1] = 0;
    // Knight
    number = i * 5 + 0 * n + 1;
    brick[number][0] = 5;
    brick[number][1] = 1;
    number = i * 5 + 7 * n + 1;
    brick[number][0] = 5;
    brick[number][1] = 0;
  }
  for (let i = 0; i < 8; i++) {
    // Pawns
    let number = i + 6 * n;
    brick[number][0] = 6;
    brick[number][1] = 0;
    number = i + 1 * n;
    brick[number][0] = 6;
    brick[number][1] = 1;
  }
}
function DrawSquares() {
  for (let j = 0; j * P < height; j++) {
    // For loop. Hvor mange felter man er nede. y-værdi
    let row1 = []; // Row1 er rækkens felters coords. Laves til blank ved start af hver j-loop, som er antal række nede
    let color; // Color er firkant farve. Defineres da teksten skal være modsat farve.
    for (let i = 0; i * P < width; i++) {
      // For loop igen. Er hvor mange felter man er henne på rækken. x-værdi
      if (i % 2 == 0) {
        // Hvis i (feltes x-værdi) er lige
        if (j % 2 == 0) {
          // Hvis j (y-værdi) er lige
          fill(255);
        } else {
          // Hvis j er ulige
          fill(43, 19, 14);
        }
      } else {
        // Hvis i er ulige
        if (j % 2 == 1) {
          // Hvis j er ulige
          fill(255);
        } else {
          // Hvis j er lige
          fill(43, 19, 14);
        }
      }
      if (DefineSquares == 0) {
        // I første "frame" defineres felteres x-værdi
        row1.push([j * P + 50, i * P + 50, j + i * n + 1]);
        brick.push([0, 2, i * P + 50, j * P + 50]);
      }
      rect(j * P, i * P, P, P); // tegner firkanterne
    }
    if (DefineSquares == 0) {
      // I første "frame" defineres alle felteres x-værdi per felternes y-værdi
      square.push(row1);
    }
  }
}

function DrawBricks(x) {
  DrawSquares();
  fill(170, 255, 0);
  if (x < 65) {
    rect(brick[x][2] - 50, brick[x][3] - 50, 100, 100);
  }
  for (let i = 0; i < 64; i++) {
    image(
      IMG[brick[i][0]][brick[i][1]],
      brick[i][2],
      brick[i][3],
      IMG[brick[i][0]][2],
      IMG[brick[i][0]][3]
    );
  }
}

function mousePressed() {
  for (let i = 0; i < 64; i++) {
    if (mouseX > brick[i][2] - 50 && mouseX < brick[i][2] + 50) {
      if (mouseY > brick[i][3] - 50 && mouseY < brick[i][3] + 50) {
        if (BrickPressed[0] == 1) {
          BrickIsPressed(
            brick[BrickPressed[1]],
            brick[BrickPressed[1]][0],
            brick[BrickPressed[1]][1],
            brick[i],
            BrickPressed[1]
          );
          break;
        } else if (brick[i][0] > 0) {
          BrickPressed = [1, i];
          DrawBricks(BrickPressed[1]);
          break;
        }
      }
    }
  }
}

function BrickIsPressed(Bricks, type, color, pressed, i) {
  if (pressed[2] == Bricks[2] && pressed[3] == Bricks[3]) {
    BrickPressed = [];
    DrawBricks();
  } else if (CheckKills(Bricks, pressed, type, i)) {
    if (type == 1) {
      // King
      if (
        pressed[2] == Bricks[2] + 100 ||
        pressed[2] == Bricks[2] - 100 ||
        (pressed[2] == Bricks[2] && pressed[3] != Bricks[3])
      ) {
        if (
          pressed[3] == Bricks[3] + 100 ||
          pressed[3] == Bricks[3] - 100 ||
          (pressed[3] == Bricks[3] && pressed[2] != Bricks[3])
        ) {
          BrickIsPressed2(Bricks, pressed);
        }
      }
    } else if (type == 2) {
      // Queen
      for (let i = 1; i <= 8; i++) {
        if (
          pressed[2] == Bricks[2] + i * 100 ||
          pressed[2] == Bricks[2] - i * 100 ||
          (pressed[2] == Bricks[2] && pressed[3] != Bricks[3])
        ) {
          if (
            pressed[3] == Bricks[3] + i * 100 ||
            pressed[3] == Bricks[3] - i * 100 ||
            (pressed[3] == Bricks[3] && pressed[2] != Bricks[3])
          ) {
            BrickIsPressed2(Bricks, pressed);
          }
        }
      }
    } else if (type == 3) {
      // Rook
      if (pressed[2] == Bricks[2]) {
        if (
          (pressed[3] >= Bricks[3] + 100 && pressed[3] <= Bricks[3] + 800) ||
          (pressed[3] <= Bricks[3] - 100 && pressed[3] >= Bricks[3] - 800)
        ) {
          BrickIsPressed2(Bricks, pressed);
        }
      } else if (
        pressed[2] >= Bricks[2] + 100 &&
        pressed[2] <= Bricks[2] + 800 &&
        pressed[2] <= Bricks[2] - 100 &&
        pressed[2] >= Bricks[2] - 800
      ) {
        if (pressed[3] == Bricks[3]) {
          BrickIsPressed2(Bricks, pressed);
        }
      }
    } else if (type == 4) {
      // Bishop
      for (let i = 1; i <= 8; i++) {
        if (
          pressed[2] == Bricks[2] + i * 100 ||
          pressed[2] == Bricks[2] - i * 100
        ) {
          if (
            pressed[3] == Bricks[3] + i * 100 ||
            pressed[3] == Bricks[3] - i * 100
          ) {
            BrickIsPressed2(Bricks, pressed);
          }
        }
      }
    } else if (type == 5) {
      // Knight
      if (pressed[2] == Bricks[2] - 100 || pressed[2] == Bricks[2] + 100) {
        if (pressed[3] == Bricks[3] + 200 || pressed[3] == Bricks[3] - 200) {
          BrickIsPressed2(Bricks, pressed);
        }
      } else if (
        pressed[2] == Bricks[2] - 200 ||
        pressed[2] == Bricks[2] + 200
      ) {
        if (pressed[3] == Bricks[3] + 100 || pressed[3] == Bricks[3] - 100) {
          BrickIsPressed2(Bricks, pressed);
        }
      }
    } else if (type == 6) {
      // Pawn
      if (pressed[2] == Bricks[2]) {
        if (
          (pressed[3] >= Bricks[3] + 100 &&
            pressed[3] <= Bricks[3] + 200 &&
            color == 1) ||
          (pressed[3] <= Bricks[3] - 100 &&
            pressed[3] >= Bricks[3] - 200 &&
            color == 0)
        ) {
          BrickIsPressed2(Bricks, pressed);
        }
      }
    }
  }
  if (PawnAttack == 1) {
    if (pressed[2] == Bricks[2] + 100 || pressed[2] == Bricks[2] - 100) {
      if (
        (pressed[3] == Bricks[3] + 100 && color == 1) ||
        (pressed[3] == Bricks[3] - 100 && color == 0)
      ) {
        BrickIsPressed2(Bricks, pressed);
      }
    }
  }
}

function BrickIsPressed2(Bricks, pressed) {
  pressed[0] = Bricks[0];
  pressed[1] = Bricks[1];
  Bricks[0] = 0;
  Bricks[1] = 2;
  BrickPressed = [];
  DrawBricks();
}

function CheckKills(Bricks, pressed, type, i) {
  if (Bricks[1] == pressed[1]) {
    print("False");
    return false;
  } else if (type == 6) {
    if (
      ((brick[i - 7][1] == 1 || brick[i - 9][1] == 1) && Bricks[1] == 0) ||
      ((brick[i + 7][1] == 0 || brick[i + 9][1] == 0) && Bricks[1] == 1)
    ) {
      PawnAttack = 1;
      print(PawnAttack);
    } else {
      PawnAttack = 0;
      print(PawnAttack);
    }
    if (
      (brick[i - 8][0] != 0 && Bricks[1] == 0) ||
      (brick[i + 8][0] != 0 && Bricks[1] == 1)
    ) {
      print("hmm");
      return false;
    }
  }
  return true;
}
