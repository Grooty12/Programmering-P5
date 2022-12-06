let word = ["p", "n", "e", "u", "m", "o", "n", "i", "a"];
let letter, input, button, isCorrect;
let wrong = [];
let pressed = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  textAlign(CENTER);
  textSize(50);
  strokeWeight(5);
  line(100, 600, 300, 600);
  line(200, 100, 200, 600);
  line(200, 100, 600, 100);
  line(200, 200, 300, 100);
  line(600, 100, 600, 200);
  for (let i = 0; i < word.length; i++) {
    line(400 + 45 * i, 650, 400 + 45 * i + 30, 650);
  }
  input = createInput();
  input.position(700, 100);

  button = createButton("Submit");
  button.position(input.x + input.width, input.y);
  button.mousePressed(SubmitWord);
}

function drawLetter(i) {
  text(letter.toUpperCase(), 400 + 45 * i + 15, 630);
}
function SubmitWord() {
  if (checkIfAlreadyPressed()) {
    return false;
  }
  letter = input.value().toLowerCase();
  if (checkIfLetter()) {
    pressed.push(letter);
    checkCorrectLetter();
  }
  input.value("");
}

function checkIfLetter() {
  if (letter.length == 1) {
    if (letter.toLowerCase() != letter.toUpperCase()) {
      return true;
    } else {
      print("Not a letter");
      return false;
    }
  } else {
    print("Not a letter");
    return false;
  }
}

function checkCorrectLetter() {
  isCorrect = 0;
  for (let i = 0; i < word.length; i++) {
    let wordLetter = word[i];
    if (letter == wordLetter) {
      drawLetter(i);
      isCorrect = 1;
    }
  }
  if (isCorrect == 0) {
    print("Wrong!");
    wrong.push(letter);
    drawMan(wrong.length);
  }
}

function checkIfAlreadyPressed() {
  for (let i = 0; i <= pressed.length; i++) {
    if (input.value().toLowerCase() == pressed[i]) {
      print("Already Pressed");
      return true;
    }
  }
}

function drawMan(n) {
  // Head
  if (n == 1) {
    circle(600, 200, 80);
  }
  // Body
  if (n == 2) {
    line(600, 240, 600, 400);
  }
  // Arm 1
  if (n == 3) {
    line(600, 270, 500, 180);
  }
  // Arm 2
  // Leg 1
  // Leg 2
}
