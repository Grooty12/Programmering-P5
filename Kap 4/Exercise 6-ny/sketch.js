function setup() { 
  createCanvas(120, 120); 
  strokeWeight(30); 
  } 
  function draw() { 
   background(204); 
   stroke(102); 
   line(40, 0, 70, height); 
   if (mouseIsPressed) { //hvor kommer denne variable fra? Kommer fra P5. Den tjekker om musen er trykkket nede.
    if (mouseButton == LEFT) {  // og hvad med den? Tjekker om musseknappen venstre er trykket ned
     stroke(255); 
    } 
    else { 
     stroke(0); 
    } 
    line(0, 70, width, 50);
    } 
  }
  // Laver en cirkel og ændrer hvor tyk den er, hvis man trykker på venstreknappen eller højre.