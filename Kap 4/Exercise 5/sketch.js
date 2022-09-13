function setup() { 
  createCanvas(120, 120); 
  strokeWeight(30); // Tykkelser af linjer
  } 
  function draw() { 
   background(204); 
   stroke(102); // Farve af linjer. Lige nu på grayscale
   line(40, 0, 70, height); // Laver en linje fra punkt 40,0 og 70,height (120)
   if (mouseIsPressed) { //hvor kommer denne variable fra? Kigger om en af musens knapper er trykket på. Er med i JS
    if (mouseButton == LEFT) {  // og hvad med den? Kigger om ventre musseknap er trykket ned. Er med i JS
     stroke(255); // Kigger om en musseknap er trykket, hvis det er venstre musseknap, bliver farve sort.
    } 
    else { 
     stroke(0); // Hvis det ikke er venstre musseknap, bliver farven hvid
    } 
    line(0, 70, width, 50); // Laver en linje fra 0,70 til width (120),50, hbis en musseknap er trykket ned.
    } 
  } 