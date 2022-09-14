let IsDead = 1;


function setup() {
  createCanvas(1500, 600);
}

function draw() {
  
  textSize(50);
  if (IsDead == 0) {
    background(220);
    fill(0)
    textAlign(CENTER);
    text('Do You Want To Die?',(width/2),200);
    fill(250);
    rect((width/2)-50,250,100,100);
    fill(0);
    text('Yes',width/2,310);
  }
  if (IsDead == 1) {
    background(0);
    fill(250);
    textAlign(CENTER);
    text('You Died. Click here to live', (width/2),200);
    rect((width/3)-50,250,100,100);
  }
}

function mousePressed() {
  if (IsDead == 0) {
    if (mouseX > (width/2)-50 && mouseX < (width/2)+50 && mouseY > 250 && mouseY < 250+100) {
      IsDead = 1;
    }
  }
  if (IsDead == 1) {
    if (mouseX > (width/3)-50 && mouseX < (width/3)+50 && mouseY > 250 && mouseY < 250+100) {
      IsDead = 0;
    }
  }
}
