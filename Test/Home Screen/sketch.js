let screen1 = 1;
let screen2 = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (screen1 == 1) {
    background(50);
    textAlign(CENTER);
    textSize(100);
    stroke(255);
    strokeWeight(5);
    text('Welcome!',width/2,100);
    fill(255);
    if (mouseX > width/2-400 && mouseX < width/2+400 && mouseY > 250 && mouseY < 350) {
      if (mouseIsPressed === true) {
        screen1 = 0;
        screen2 = 1;
      }
      fill(210);
    }
    strokeWeight(2);
    rect(width/2-400,300,800,50);
    noStroke();
    fill(0);
    textSize(50);
    text('Press For Next Screen',width/2,340)
  }
  if (screen2 == 1) {
    background(250);
    textAlign(CENTER);
    textSize(100);
    text('Good',width/2,100);
    fill(20);
    if (mouseX > 50 && mouseX < 250 && mouseY > height-150 && mouseY < height-50) {
      fill(80);
      if (mouseIsPressed == true) {
        screen1 = 1;
        screen2 = 0;
      }
    }
    rect(50,height-100,200,50);
    textSize(50);
    fill(250);
    text('Back',150,height-58);
  }
}