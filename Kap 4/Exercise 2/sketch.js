function setup() { 
  createCanvas(600, 400);
} 

function draw() { 
  background(220);
  fill(255,0,0); // Rektanglerne vil blive røde.
  noStroke();
  if (mouseX < width/3) { // Hvis musen er mindre end 1/3 af bredden af canvaset, laves et rektangel inde i den tredjedel.
    rect(0, 0, width/3, height);
  }
  else if (mouseX <= width*2/3) { //Hvis musen er mindre eller lig med 2/3 af bredden af canvaset, laves et rektangel inde i den tredjedel.
    rect(width/3, 0, width/3, height);
  }
  else {
    rect(width*2/3, 0, width/3, height); // Hvis begge de to er forkerte (musen er i højre tredjedel af canvaset), laves et rektangel der.
  }
}
