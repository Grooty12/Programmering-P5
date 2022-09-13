let x;
let justHitRightWall;
let xspeed = 3;

function setup() { 
  createCanvas(400, 400);
  x = width / 2; // Den vil starte i midten
} 

function draw() { 
  background(220);
  if (x > width - 25 || x < 0 + 25) { // Hvis ellipsen (dannes nedenfor) rammer en af kanterne på siden, vil den køre tilbage.
    xspeed *= -1;
  }
  
  //Move
  x += xspeed;
  ellipse(x, height/2, 50, 50); //Ellipsen dannes.
}