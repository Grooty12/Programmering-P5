let word = ["p", "n", "e", "u", "m", "o", "n", "i", "a"];
let letter;
let input;
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(700, 100);

  button = createButton("Submit");
  button.position(input.x + input.width, input.y);
  button.mousePressed(SubmitWord());
}

function draw() {
  background(220);
  line(100, 600, 300, 600);
  line(200, 100, 200, 600);
  line(200, 100, 600, 100);
  line(200, 200, 300, 100);
  line(600, 100, 600, 200);
}
function SubmitWord() {
  letter = input.value();
  print(letter);
}
