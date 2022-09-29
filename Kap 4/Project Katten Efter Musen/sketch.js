let Mouse = {
  // Array med alle musens værdier.
  X: 0, // Koordinat
  Y: 0, // Koordinat
  R: 50, // Hvor bred/høj billedet er. Bruges til, hvornår musen ikke længere kan bevæge sig i forhold til væggen.
  Speed: 5, // Dens hastighed, når man trykker på tasterne
  img: 0, // Billed
  imginverted: 0, // Billed, omvendt (hvis man går den anden vej)
  HBX: 0, // Hitbox
  HBY: 0, // Hitbox
  HBR: 77 / 2, // Hitboxcirkel radius
  Retning: 1, // Hvilken retning den går
};
let Cat1X; // Den første kats forskellige værdier.
let Cat1Y;
let Cat1SpeedX; // Hastighed (x)
let Cat1SpeedY; // Hastighed (y)
let Cat1HBX; // Hitbox (x)
let Cat1HBY; // Hitbox (y)
let Cat1HBR; // Hitbox radius
let imgCat1; // Billed
let imgCat1Inverted; // Billed, omvendt
let imgCat1X = 2543 / 18; // Billedes bredde
let imgCat1Y = 1746 / 18; // Billedes højde

let Cat2X; // Anden kats værdier
let Cat2Y;
let Cat2SpeedX; // Hasighed (x)
let Cat2SpeedY; // Hastighed (y)
let Cat2HBX; // Hitbox( x)
let Cat2HBY; // Hitbox (y)
let Cat2HBR; // Hitbox Radius
let imgCat2; // Biled
let imgCat2Inverted; // Billed, omvendt
let imgCat2X = 800 / 5.5; // Billedes bredde
let imgCat2Y = 800 / 5.5; // Billedes højde
let CatSpeed = 1.5; // Begge kattes hastighed

let CX; // Ostens forskellige værdier
let CY;
let CHBX; // Hitbox (x)
let CHBY; // Hitbox (y)
let CHBR; // Hitbox radius
let CheeseCounter = 0; // Counter for, hvor mange oste man har "Spist"
let imgCheese; // Billed
let imgCheeseX = 650 / 15; // Billedes bredde
let imgCheeseY = 572 / 15; // Billedes højde

let BI; // Baggrunden for "You Died" skærmen
let BIN; // Denne variable bliver til et tilfældigt et af billederne.
let Quote = [
  // Qutoes til "You Died" skærmen. De er alle en joke selvfølelig.
  "Your Birth Was A Mistake",
  '"Just The Text: "Jumpcare""',
  "Something, Something, You Are Bad",
  "Insert Random Insult",
  "Yes You Will Get Paid Robertichd",
  "Stop It Patrick! You Are Hurting Him",
  "Your Intelligence Is An Insult To All Of Humanity",
  "Just Kidding... Or Something",
  "Char",
  "We Ran Out Of Insults",
  "Here Is A Cookie For You... Sike You Dumb Fuck",
  "Lorem Ipsum",
  "Venus Is Short",
  "The fact that youre still alive proves that there is no god",
  "i want to go home",
  "Cat",
  "Rat",
  "Im Batman!",
  "Youre not even good enough for a participation trophy",
  "Semen",
  "Cunt",
];
let QuoteYourBad = // Samme som før, men denne vises, hvis man får 0 point.
  "you incompetent piece of shit, this game is incredibly fucking simple, how in the name of all that is holy did you manage to die so quickly... fucking hell";
let QuoteN; // Samme som BIN, bare med quotesne
let imgBackground; // Baggrunden for spillet
let Respawn; // Billedet af Respawn knappen (Taget fra Minecraft)
let RespawnPressed; // Billede af Respawn knappen, hvis man har musen over den (Taget fra Minecraft)
let TitleScreen; // Kanp, som tager en til start skærmen (taget fra Minecraft)
let TitleScreenPressed; // Samme som TitleScreen, bare hvis man har musen over den (Taget fra Minecraft)
let StartMenu = 1; // Variable til, om startmenuen skal vises
let Game = 0; // Variable til, om spillet er i gang
let Dead = 0; // Variable til, om man er død

function preload() {
  Mouse.img = loadImage("Assets/Mouse.png");
  Mouse.imginverted = loadImage("Assets/MouseInverted.png");
  imgCat1 = loadImage("Assets/Cat1.png");
  imgCat1Inverted = loadImage("Assets/Cat1Inverted.png");
  imgCat2 = loadImage("Assets/Cat2.png");
  imgCat2Inverted = loadImage("Assets/Cat2Inverted.png");
  imgCheese = loadImage("Assets/Cheese.png");
  BI = [
    loadImage("Assets/Mike/Baby-Yoda.png"),
    loadImage("Assets/Mike/IDK.png"),
    loadImage("Assets/Mike/Mike-1.png"),
    loadImage("Assets/Mike/Mike-2.png"),
    loadImage("Assets/Mike/Mike-3.png"),
    loadImage("Assets/Mike/MikeShrek.png"),
    loadImage("Assets/Mike/Minion.png"),
    loadImage("Assets/Mike/Shrek-1.png"),
    loadImage("Assets/Mike/Shrek.png"),
    loadImage("Assets/Mike/TMNT-1.png"),
    loadImage("Assets/Mike/TMNT-2.png"),
    loadImage("Assets/Mike/Yoda-lego.png"),
    loadImage("Assets/Mike/Yoda.png"),
  ];
  imgBackground = loadImage("Assets/CardBoardBox.jpg");
  Respawn = loadImage("Assets/Respawn.png");
  RespawnPressed = loadImage("Assets/RespawnPressed.png");
  TitleScreen = loadImage("Assets/Title-Screen.png");
  TitleScreenPressed = loadImage("Assets/Title-Screen-Pressed.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  Mouse.X = random(Mouse.R, width / 2 - Mouse.R); // Musen spawner et tilfældigt sted
  Mouse.Y = random(Mouse.R, height / 2 - Mouse.R);

  Cat1X = random(width / 2, width - imgCat1X); // Kat 1 spawner et tilfældigt sted
  Cat1Y = random(height / 2, height - imgCat1Y);
  Cat1HBR = imgCat1Y / 2; // Kattens hitbox-radius er halvdelen af billedets y-værdi

  Cat2X = random(width / 2, width - imgCat2X); // Kat 2 spawner et tilfældigt sted
  Cat2Y = random(height / 2, height - imgCat2Y);
  Cat2HBR = imgCat2X / 2; // Kattens hitbox-radius er halvedelen af billedets x-værdi

  CX = random(imgCheeseX / 2, width - imgCheeseX / 2); // Osten spawner et tilfældigt sted
  CY = random(imgCheeseY / 2, height - imgCheeseY / 2);
  CHBR = imgCheeseY / 2; // Ostens hitbox-radius er halvdene af billedets y-værdi
}

function draw() {
  fill(250);
  if (StartMenu == 1) {
    // Hvis variablen for, om man er på startskærmen er 1, så vises startskærmen
    background(50);
    textAlign(CENTER);
    textSize(100);
    stroke(255);
    strokeWeight(5);
    text("Welcome!", width / 2, 100); // Der vises et stort "Welcome tekst"
    fill(255);
    if (
      mouseX > width / 2 - 400 && // Hvis musen er inde for firkanten, så bliver den en anden farve
      mouseX < width / 2 + 400 &&
      mouseY > 250 &&
      mouseY < 350
    ) {
      if (mouseIsPressed === true) {
        // Hvis der trykkes går spillet i gang
        StartMenu = 0;
        Game = 1;
      }
      fill(210);
    }
    strokeWeight(2);
    rect(width / 2 - 400, 300, 800, 50);
    noStroke();
    fill(0);
    textSize(50);
    text("Press Here To Start", width / 2, 340); // I firkanten vises "Press Here To Start"
  }
  if (Game == 1) {
    // Hvis variablen "Game" er 1, er spillet i gang
    background(imgBackground);
    Mouse.HBX = Mouse.X + 45; // Musens hitbox x-værdi er halvdelen af billedets bredde (90) mere end musens musens x-værdi (dens x og y-værdi er oppe i venstre hjørne)
    Mouse.HBY = Mouse.Y + Mouse.HBR; // Musens hitbox y-værdi er halvdelen af billedet højde (det samme som dens hitbox-radius) mere end musens y-værdi
    CHBX = CX + imgCheeseX / 2; // Samme som før, bare med ost-billedets bredde /2
    CHBY = CY + imgCheeseY / 2;
    Cat1HBX = Cat1X + imgCat1X / 2; // Samme som med osten, bare for kattene
    Cat1HBY = Cat1Y + imgCat1Y / 2;
    Cat2HBX = Cat2X + imgCat2X / 2;
    Cat2HBY = Cat2Y + imgCat2Y / 2;

    Cat1SpeedX =
      ((CatSpeed + 0.5) /
        sqrt((Mouse.HBX - Cat1HBX) ** 2 + (Mouse.HBY - Cat1HBY) ** 2)) * // Kat 1s hastighed er kathastigheded +0.5 (for at få noget forskel mellem de to katte, så de ikke er ovenpå hinanden) dividered med retningsvektoren
      (Mouse.HBX - Cat1HBX);
    Cat1SpeedY =
      ((CatSpeed + 0.5) /
        sqrt((Mouse.HBX - Cat1HBX) ** 2 + (Mouse.HBY - Cat1HBY) ** 2)) * // Samme, bare for y-værdien
      (Mouse.HBY - Cat1HBY);
    Cat2SpeedX =
      (CatSpeed /
        sqrt((Mouse.HBX - Cat2HBX) ** 2 + (Mouse.HBY - Cat2HBY) ** 2)) * // Samme bare uden at lægge 0.5 til
      (Mouse.HBX - Cat2HBX);
    Cat2SpeedY =
      (CatSpeed /
        sqrt((Mouse.HBX - Cat2HBX) ** 2 + (Mouse.HBY - Cat2HBY) ** 2)) * // Samme
      (Mouse.HBY - Cat2HBY);
    if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
      // Hvis man trykker på enten "W" eler "UP-arrow", bevæger musen sig opad
      // W
      if (Mouse.Y > 0) {
        Mouse.Y -= Mouse.Speed;
      }
    }
    if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
      // "S" eller "DOWN-arrow" - musen bevæger sig nedad
      // S
      if (Mouse.Y < height - 82) {
        Mouse.Y += Mouse.Speed;
      }
    }
    if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
      // "A" eller "Left-arrow" - musen bevæger sig til venstre
      // A
      if (Mouse.X > 0) {
        Mouse.X -= Mouse.Speed;
        Mouse.Retning = -1; // Retningen ændres til at være til venstre
      }
    }
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
      // "D" eller "right-arrow" - musen bevæger sig til højre
      // D
      if (Mouse.X < width - 90) {
        Mouse.X += Mouse.Speed;
        Mouse.Retning = 1; // Retningen ændres til at være til højre
      }
    }

    if (
      sqrt((Mouse.HBX - CHBX) ** 2 + (Mouse.HBY - CHBY) ** 2) <
      Mouse.HBR + CHBR
    ) {
      // Tjekker om musen rammer ostens hitbox
      CX = random(imgCheeseX / 2, width - imgCheeseX / 2); // Osten kommer et tilfældigt sted på banen
      CY = random(imgCheeseY / 2, height - imgCheeseY / 2);
      CheeseCounter += 1; // Man får 1 point
      Mouse.Speed *= 1.015; // Musens hastighed går op
      if (CatSpeed < Mouse.Speed) {
        CatSpeed *= 1.055; // Kattenens hastighed går også op
      }
    }

    Cat1X += Cat1SpeedX; // Får kattene til at bevæge sig
    Cat1Y += Cat1SpeedY;
    Cat2X += Cat2SpeedX;
    Cat2Y += Cat2SpeedY;

    if (
      sqrt((Mouse.HBX - Cat1HBX) ** 2 + (Mouse.HBY - Cat1HBY) ** 2) <
        Cat1HBR + Mouse.HBR || // Tjekker om kat 1 rammer musen
      sqrt((Mouse.HBX - Cat2HBX) ** 2 + (Mouse.HBY - Cat2HBY) ** 2) <
        Cat2HBR + Mouse.HBR // Tjekker om kat 2 rammer musen
    ) {
      Cat1X = random(imgCat1X, width - imgCat1X); // Kattene kommer tilfældige steder hen
      Cat1Y = random(imgCat1Y, height - imgCat1Y);
      Cat2X = random(imgCat2X, width - imgCat2X);
      Cat2Y = random(imgCat2Y, height - imgCat2Y);
      CatSpeed = 1; // Kattens hastighed bliver resettet
      Mouse.Speed = 5; // Musens hastighed bliver resettet
      Dead = 1; // Kommer hen på dead skærmen
      Game = 0; // Spillet er slut
      BIN = random(BI); // Tilfældigt baggrundsbilled til død skærmen
      QuoteN = random(Quote); // Tilfældigt quote til dæd skærmen
    }
    textSize(32);
    fill(250);
    text(CheeseCounter, 50, 50); // Viser hvor mange point man har oppe i venstre hjørne
    image(imgCheese, CX, CY, imgCheeseX, imgCheeseY); // Viser billedet af osten
    if (Mouse.Retning == 1) {
      // Hvis retningen er til højre, vises normale musbillede
      image(Mouse.img, Mouse.X, Mouse.Y);
    }
    if (Mouse.Retning == -1) {
      // Hvis retningen er til venstre, vises inverted musbillede
      image(Mouse.imginverted, Mouse.X, Mouse.Y);
    }
    if (Cat1SpeedX > 0) {
      // Hvis kattehastigheden er over 0 (Den bevæger sig til højre), vises normale kattebillede
      image(imgCat1, Cat1X, Cat1Y, imgCat1X, imgCat1Y);
    }
    if (Cat1SpeedX < 0) {
      // Hvis hastigheden er under 0 (bevæger sig til venstre) vises inverted kattebillede
      image(imgCat1Inverted, Cat1X, Cat1Y, imgCat1X, imgCat1Y);
    }
    if (Cat2SpeedX > 0) {
      // Samme bare for kat 2
      image(imgCat2, Cat2X, Cat2Y, imgCat2X, imgCat2Y);
    }
    if (Cat2SpeedX < 0) {
      // Samme bare for kat 2
      image(imgCat2Inverted, Cat2X, Cat2Y, imgCat2X, imgCat2Y);
    }
  }
  if (Dead == 1) {
    // Hvis man er død, vises død-skærmen
    background(BIN);
    textAlign(CENTER);
    textSize(100);
    stroke(0);
    strokeWeight(10);
    text("You Died!", width / 2, 160); // Stor tekst siger "You Died!"
    textSize(25);
    strokeWeight(5);
    text("Score:", width / 2 - 30, 200);
    text(CheeseCounter, width / 2 + 20, 202); // Viser hvor mange point man fik
    if (CheeseCounter == 0) {
      // Hvis man fik 0 point vises "du dårlig" quotet
      text(QuoteYourBad, width / 2, 300);
    } else {
      // Ellers vises et tilfældigt quote
      text(QuoteN, width / 2, 300);
    }
    strokeWeight(1);
    image(Respawn, width / 2 - 300, 500); // Viser "Respawn" knappen (taget fra MC)
    image(TitleScreen, width / 2 - 300, 620); // viser "Start-menu" knappen (taget fra MC)
    if (
      mouseX > width / 2 - 300 &&
      mouseX < width / 2 + 300 &&
      mouseY > 500 &&
      mouseY < 560
    ) {
      image(RespawnPressed, width / 2 - 300, 500); // Hvis musen er over respawn knappen, vises nyt billed
      if (mouseIsPressed == true) {
        // Hvis man trykker på knappen
        Dead = 0; // Man er ikke død længere
        CheeseCounter = 0; // Score resettet
        Game = 1; // Spillet er i gang
      }
    }
    if (
      // Hvis musebn er over Start menu knappen
      mouseX > width / 2 - 300 &&
      mouseX < width / 2 + 300 &&
      mouseY > 620 &&
      mouseY < 690
    ) {
      image(TitleScreenPressed, width / 2 - 300, 620); // Vises der nyt billed
      if (mouseIsPressed == true) {
        // Hvis man trykker
        CheeseCounter = 0; // Score resettet
        Dead = 0; // Man er ikke død længere
        StartMenu = 1; // Start menu vises
      }
    }
  }
}
