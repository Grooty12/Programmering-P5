let input1, input2, input3, button, text, resetbutton;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  textAlign(CENTER);
  input1 = createInput();
  input1.position(200, 100);

  input2 = createInput();
  input2.position(input1.x, input1.y + input1.height + 5);

  input3 = createInput();
  input3.position(input1.x, input2.y + input2.height + 5);

  button = createButton("Create");
  button.position(input1.x + input1.width, 100);
  button.mousePressed(create);

  resetbutton = createButton("Reset");
  resetbutton.position(button.x, button.y);
  resetbutton.mousePressed(reset);
  resetbutton.hide();

  fill(10);
  title = createElement(
    "h3",
    "Create a triangle and define the lenth of the sides (value is times 10)"
  );
  title.position(200, 50);
  angleMode(DEGREES);
}

function create() {
  let a = int(input1.value()) * 10;
  let b = int(input2.value()) * 10;
  let c = int(input3.value()) * 10;
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
  resetbutton.show();
}

function reset() {
  title.html("");
  setup();
}
