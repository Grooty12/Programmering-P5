function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  //hvad er denne variable for en størrelse? Det en boolean om en tastaturknap er trykket inde
  if ((key == 'h') || (key == 'H')) { line(30, 60, 90, 60); } // Hvis knappen h eller H (shift h) er trykket, laves en linje fra 30,60 til 90,60. Og danner et H
  if ((key == 'n') || (key == 'N')) { line(30, 20, 90, 100); } // Hvis knappen n eller N (shift N) er trykket, laves en linje fra 30,20 til 90,100. Danner et N
 } 
line(30, 20, 30, 100); // En linje fra 30,20 til 30,100 laves
line(90, 20, 90, 100); //en linje fra 90,20 til 90,100 laves
} 