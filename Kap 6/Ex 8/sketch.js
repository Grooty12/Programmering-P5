let table;

function preload() {
  table = loadTable("assets/words_alpha.txt", "txt");
}

function setup() {
  let tableArray = table.getArray();
  print(tableArray);
  let word = random(tableArray)[0];
  print(word);
}
