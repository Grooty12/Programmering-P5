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
  textAlign(CENTER); // Gør så tekst skrives i midten af coords
  imageMode(CENTER); // Samme bare med billeder
  noFill;
  bricks[0] = ["pawn", 3, 3]; // Test, definerer brick 0 til en pawn.
  fill(255);
}
function draw() {
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
          color = 255;
        } else {
          // Hvis j er ulige
          color = 0;
        }
      } else {
        // Hvis i er ulige
        if (j % 2 == 1) {
          // Hvis j er ulige
          color = 255;
        } else {
          // Hvis j er lige
          color = 0;
        }
      }
      if (DefineSquares == 0) {
        // I første "frame" defineres felteres x-værdi
        row1.push([j * P + 50, i * P + 50, j + i * n + 1]);
      }
      fill(color);
      rect(j * P, i * P, P, P); // tegner firkanterne
      fill(255 - color);
      text(j + i * n + 1, j * P + 50, i * P + 50); // Skriver felt nummer
    }
    if (DefineSquares == 0) {
      // I første "frame" defineres alle felteres x-værdi per felternes y-værdi
      square.push(row1);
    }
  }
  DefineSquares = 1; // Til de ting, som kun skal køre 1 gang, spares for-loops i function setup
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
