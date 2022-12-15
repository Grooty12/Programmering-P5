let treeTrunk, treeLeaves;
function setup() {
  createCanvas(windowWidth, windowHeight);
  treeTrunk = new Trunks();
  treeLeaves = new Leaves();
  test = noStroke();
  background(220);
  treeTrunk.show();
  treeLeaves.show();
}

function draw() {}

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
  constructor(n) {
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
      this.corners.push(
        this.x + 50 * i,
        this.y - 120 * i,
        this.x + this.width - 100 * i + 50 * i,
        this.y - 120 * i,
        this.x + (this.width - 100 * i) / 2 + 50 * i,
        this.y - this.height + 55 * i - 130 * i
      );
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

// For at finde, om punkt er inde for trekant, skal man lave trekanter fra punktet til hjørnerne af trekant. De tre trekanter skal være lig med trekantens areal for at punkt er inde i trekant
