var x = 200;
var y = 200;
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  fill(0);
  ellipse(x,y,50,50);   
  if (x >= 400){
   x = 0; 
  }
  if (keyCode === UP_ARROW) {
    y = y - 1;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 1;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 1;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 1;
  }
}


// Koden laver en elipse med allerede defineret x og y koordinater. Hvis man trykker UP_arrow, så vil ellipsen bevæge sig opad, Down-arrow nedad. Left-arrow venstre og rightarrow til højre.
// Hvis dens x koordinater bliver over 400, vil den komme tilbage til at være 0.