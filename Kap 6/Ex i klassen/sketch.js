let input1, input2, button, greeting;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  stroke(0);
  input1 = createInput();
  input1.position(100, 50);
  input1.value("Fornavn");

  input2 = createInput();
  input2.position(100, 100);
  input2.value("Efternavn");

  button = createButton("Submit");
  button.position(input1.x + input1.width, 75);
  button.mousePressed(greet);

  greeting = createElement("h2", "What Is Your Name?");
  greeting.position(100, 5);

  textAlign(CENTER);
  textSize(50);
}
function greet() {
  const first = input1.value();
  const last = input2.value();
  greeting.html("Howdy" + " " + first + " " + last);
  input1.value("Fornavn");
  input2.value("Efternavn");
}
