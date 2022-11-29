let input1, input2, input3, button;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  input1 = createInput();
  input1.position(200, 100);

  input2 = createInput();
  input2.position(input1.x, input1.y + input1.height + 5);

  input3 = createInput();
  input3.position(input1.x, input2.y + input2.height + 5);

  button = createButton("submit");
  button.position(input1.x + input1.width, 100);
  button.mousePressed(create);
  angleMode(DEGREES);
}

function create() {
  let a = int(input1.value());
  let b = int(input2.value());
  let c = int(input3.value());
  if (!(a + b > c && a + c > b && b + c > a)) {
    print("NOT A TRIANGLE");
    return false;
  }

  let CV = acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b));

  let height = sin(CV) * b;
  let a2 = cos(CV) * b;
  triangle(500, 300, 500 + a, 300, 500 + a2, 300 - height);
  print(500, 300, 500 + a, 300, 500 + a2, 300 - height);
}
