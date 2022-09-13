let x;
let y;
let yspeed = 3;
let xspeed = 2;

function setup() { 
  createCanvas(400, 400);
  x = width / 2; // Den vil starte i midten'
  y = height / 2; // Den vil starte i midten (højdemessigt)
} 

function draw() { 
  background(220);
  if (x > width - 25 || x < 0 + 25) { // Hvis ellipsen (dannes nedenfor) rammer en af kanterne på siden, vil den køre tilbage.
    xspeed *= -1;
  }
  if (y > height - 25 || y < 0 + 25) { // Hvis ellipsen (dannes nedenfor) rammer en af kanterne på siden, vil den køre tilbage.
    yspeed *= -1;
  }
  
  //Move
  x += xspeed;
  y += yspeed;
  ellipse(x, y, 50, 50); //Ellipsen dannes.
}