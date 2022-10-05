let List = [7, 4, 5, 6, 9, 1, 2, 8, 3, 10];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let ListLength = List.length;
  for (let i = 0; i < ListLength; i++) {
    let ListMax = max(List);
    for (let k = 0; k < List.length; k++) {
      ListThing = List[k];
      if (ListThing == ListMax) {
        print("Largest item in list is: ", ListThing);
        List.splice(k, 1);
        print("New List = ", List);
        break;
      }
    }
  }
  print("Done");
}
