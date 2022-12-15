let letter,
  input,
  button,
  gameOver,
  isDead,
  correct,
  word,
  table,
  wrong,
  pressed,
  element;

function preload() {
  table = loadTable("assets/words_alpha.txt", "txt");
}

function setup() {
  let tableArray = table.getArray();
  do {
    word = random(tableArray)[0].toLowerCase();
  } while (word.length < 4 || word.length > 8);
  print(word);
  createCanvas(windowWidth, windowHeight);
  background(220);
  textAlign(CENTER);
  textSize(50);
  strokeWeight(5);
  line(350, 600, 550, 600);
  line(450, 100, 450, 600);
  line(450, 100, 850, 100);
  line(450, 200, 550, 100);
  line(850, 100, 850, 200);
  for (let i = 0; i < word.length; i++) {
    line(600 + 45 * i, 650, 600 + 45 * i + 30, 650);
  }
  input = createInput();
  input.position(50, 75);

  button = createButton("Submit");
  button.position(input.x + input.width, input.y);
  button.mousePressed(submitWord);

  element = createElement("h2", "Submit a word");
  element.style("color", color(255, 255));
  element.position(input.x, input.y - 50);
  correct = 0;
  isDead = 0;
  gameOver = 0;
  wrong = [];
  pressed = [];
}

function keyPressed() {
  if (keyCode == 13) {
    if (gameOver == 0) {
      submitWord();
    } else {
      setup();
    }
  }
}

function drawLetter(i) {
  text(letter.toUpperCase(), 600 + 45 * i + 15, 630);
}
function submitWord() {
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

function drawWrongLetters() {
  let letterX = 30 + (wrong.length - 1) * 40;
  let letterY;
  text(wrong[wrong.length - 1], letterX, 150);
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
  let isCorrect = 0;
  for (let i = 0; i < word.length; i++) {
    let wordLetter = word[i];
    if (letter == wordLetter) {
      drawLetter(i);
      isCorrect = 1;
      checkWon();
      print("Correct!");
    }
  }
  if (isCorrect == 0) {
    print("Wrong!");
    wrong.push(letter);
    drawWrongLetters();
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

function checkWon() {
  correct++;
  if (correct == word.length) {
    gameIsOver();
  }
}

function drawMan(n) {
  // Head
  if (n == 1) {
    circle(850, 200, 80);
  }
  // Body
  if (n == 2) {
    line(850, 240, 850, 400);
  }
  // Arm 1
  if (n == 3) {
    line(850, 270, 750, 180);
  }
  // Arm 2
  if (n == 4) {
    line(850, 270, 950, 180);
  }
  // Leg 1
  if (n == 5) {
    line(850, 400, 750, 490);
  }
  // Leg 2
  if (n == 6) {
    line(850, 400, 950, 490);
    isDead = 1;
    gameIsOver();
  }
}

function gameIsOver() {
  if (isDead == 1) {
    text("YOU DIED!", 650, 300);
    textSize(15);
    text("Word was:", 650, 300 + 70);
    text(word, 650, 300 + 85);
  } else {
    text("YOU WON!", 650, 300);
  }
  textSize(30);
  text("Press 'ENTER' to reset", 650, 300 + 50);
  gameOver = 1;
  input.hide();
  button.hide();
  element.hide();
  textSize(100);
}
