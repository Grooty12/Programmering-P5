let x = 100;
let y = 100;

function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) { // Hvis leftarrow er trykket nede, så bliver x-værdien 5 mindre
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) { // Hvis rightarrow er trykket nede, så bliver x-værdien 5 større
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) { // Hvis uparrow er trykket nede, så bliver y-værdien 5 mindre
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) { // Hvis downarrow er trykket nede, så bliver y-værdien 5 strørre
    y += 5;
  }

  clear();
  ellipse(x, y, 50, 50); // Laver en cirkel, som kan styres af pil-tasterne
}