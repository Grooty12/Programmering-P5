function setup() {
  createCanvas(400, 400);
  let wordcloud = [
    // Definerer et array med forskellige værdier (i dette tilfælde forskellige kodesprog)
    "Javascript",
    "Python",
    "C++",
    "C",
    "C#",
    "Julia",
    "Java",
    "Go",
    "R",
    "Basic",
  ];
  for (let i = 0; i < wordcloud.length; i++) {
    // Laver et for loop x gange, hvor x er længden af det array vi lige har defineret
    text(wordcloud[i], random(400), random(400)); // Skriver nummer "i" værdi i array'et et tilfældigt sted på skærmen
    i = i + 1; // Gør sådan så man springer hvert andet i iteration over (giver ikke helt mening hvorfor man ville gøre dette)
  }
}
