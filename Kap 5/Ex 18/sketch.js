let List = [7, 4, 5, 6, 9, 1, 2, 8, 3, 10];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = 0; i <= List.length; i++) {
    let Max = max(List);
    print(Max);
    List.slice(Max, Max);
    print(List);
  }
}
