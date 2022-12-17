let treeTrunk,
  treeLeaves,
  ornament = [],
  colors = [
    "Green",
    "DarkBlue",
    "Red",
    "Orange",
    "Purple",
    "LightBlue",
    "Gold",
    "Pink",
  ],
  test = 0,
  test2 = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  noStroke();
  treeTrunk = new Trunks();
  treeLeaves = new Leaves();
  treeTrunk.show();
  treeLeaves.show();
  for (let i = 0; i < 20; i++) {
    ornament[i] = new Ornaments();
    ornament[i].show();
  }
}

class Trunks {
  constructor() {
    this.color = color(118, 92, 72);
    this.h = 200;
    this.w = 50;
    this.x = width / 2;
    this.y = height - this.h;
  }

  show() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }
}

class Leaves {
  constructor() {
    this.color = color(97, 138, 61);
    this.width = 600;
    this.height = 300;
    this.x = treeTrunk.x + treeTrunk.w / 2 - this.width / 2;
    this.y = height - treeTrunk.h + 80;
    this.corners = [];
  }
  show() {
    fill(this.color);
    for (let i = 0; i < 5; i++) {
      this.corners[i] = [
        this.x + 50 * i,
        this.y - 120 * i,
        this.x + this.width - 100 * i + 50 * i,
        this.y - 120 * i,
        this.x + (this.width - 100 * i) / 2 + 50 * i,
        this.y - this.height + 55 * i - 130 * i,
      ];
      triangle(
        this.x + 50 * i,
        this.y - 120 * i,
        this.x + this.width - 100 * i + 50 * i,
        this.y - 120 * i,
        this.x + (this.width - 100 * i) / 2 + 50 * i,
        this.y - this.height + 55 * i - 130 * i
      );
    }
  }
}

class Ornaments {
  constructor() {
    this.color = random(colors);
    this.r = 30;
    do {
      this.x = random(treeLeaves.corners[0][0], treeLeaves.corners[0][2]);
      this.y = random(treeLeaves.corners[0][1], treeLeaves.corners[4][5]);
    } while (!isInside(this.x, this.y));
  }
  show() {
    fill(this.color);
    circle(this.x, this.y, this.r);
  }
}

function isInside(x1, y1) {
  for (let i = 0; i < 5; i++) {
    let area = abs(
      (treeLeaves.corners[i][0] * treeLeaves.corners[i][3] +
        treeLeaves.corners[i][2] * treeLeaves.corners[i][5] +
        treeLeaves.corners[i][4] * treeLeaves.corners[i][1] -
        treeLeaves.corners[i][1] * treeLeaves.corners[i][2] -
        treeLeaves.corners[i][3] * treeLeaves.corners[i][4] -
        treeLeaves.corners[i][5] * treeLeaves.corners[i][0]) /
        2
    );
    let area1 = abs(
      (x1 * treeLeaves.corners[i][3] +
        treeLeaves.corners[i][2] * treeLeaves.corners[i][5] +
        treeLeaves.corners[i][4] * y1 -
        y1 * treeLeaves.corners[i][2] -
        treeLeaves.corners[i][3] * treeLeaves.corners[i][4] -
        treeLeaves.corners[i][5] * x1) /
        2
    );
    let area2 = abs(
      (treeLeaves.corners[i][0] * y1 +
        x1 * treeLeaves.corners[i][5] +
        treeLeaves.corners[i][4] * treeLeaves.corners[i][1] -
        treeLeaves.corners[i][1] * x1 -
        y1 * treeLeaves.corners[i][4] -
        treeLeaves.corners[i][5] * treeLeaves.corners[i][0]) /
        2
    );
    let area3 = abs(
      (treeLeaves.corners[i][0] * treeLeaves.corners[i][3] +
        treeLeaves.corners[i][2] * y1 +
        x1 * treeLeaves.corners[i][1] -
        treeLeaves.corners[i][1] * treeLeaves.corners[i][2] -
        treeLeaves.corners[i][3] * x1 -
        y1 * treeLeaves.corners[i][0]) /
        2
    );
    if (area1 + area2 + area3 > area - 1 && area1 + area2 + area3 < area + 1) {
      return true;
    }
  }
  return false;
}
