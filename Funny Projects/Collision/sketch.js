let rects = { x: 200, y: 200, w: 100, h: 50 };
let circ = { x: 100, y: 100, r: 50 };

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  if (keyIsDown(UP_ARROW)) {
    circ.y -= 1;
  }
  if (keyIsDown(DOWN_ARROW)) {
    circ.y += 1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    circ.x += 1;
  }
  if (keyIsDown(LEFT_ARROW)) {
    circ.x -= 1;
  }

  rect(rects.x, rects.y, rects.w, rects.h);
  circle(circ.x, circ.y, circ.r * 2);
  collision();
  print(collision());
}

function collision() {
  let distX = Math.abs(circ.x - rects.x - rects.w / 2);
  let distY = Math.abs(circ.y - rects.y - rects.h / 2);

  if (distX > rects.w / 2 + circ.r) {
    return false;
  }
  if (distY > rects.h / 2 + circ.r) {
    return false;
  }
  if (distX <= rects.w / 2) {
    return true;
  }
  if (distY <= rects.h / 2) {
    return true;
  }
  let dx = distX - rects.w / 2;
  let dy = distY - rects.h / 2;
  return dx ** 2 + dy ** 2 <= circ.r ** 2;
}
