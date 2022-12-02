let input, button, text, resetbutton;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  textAlign(CENTER);
  input = createInput();
  input.position(200, 100);

  button = createButton("Create");
  button.position(input.x + input.width, 100);
  button.mousePressed(create);

  resetbutton = createButton("Reset");
  resetbutton.position(input.x, input.y);
  resetbutton.mousePressed(reset);
  resetbutton.hide();

  fill(10);
  title = createElement(
    "h3",
    "Define length of triangle sides (value is times 10. Comma seperated)"
  );
  title.position(200, 50);
  angleMode(DEGREES);
}

function create() {
  let lengths = split(input.value(), ",");
  let a = int(lengths[0]) * 10;
  let b = int(lengths[1]) * 10;
  let c = int(lengths[2]) * 10;
  if (!(a + b > c && a + c > b && b + c > a)) {
    title.html("NOT A TRIANGLE. TRY AGAIN");
    return false;
  }

  let CV = acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b));

  let height = sin(CV) * b;
  let a2 = cos(CV) * b;
  triangle(500, 500, 500 + a, 500, 500 + a2, 500 - height);
  title.html("Done");
  button.hide();
  input.hide();
  resetbutton.show();
}

function reset() {
  title.html("");
  setup();
}
