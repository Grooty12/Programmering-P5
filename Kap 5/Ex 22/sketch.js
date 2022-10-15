let tal = [4, 3, 5, 2, 1]; // Definerer array
let i = tal.length - 1; // Definerer i som længden af tallinjen - 1
let antalSammenligninger = 0; // Definerer antal sammenligninger
while (i >= 1) {
  // While loop som kører hvis i er større end eller lig med 1
  for (var j = 0; j < i; j++) {
    // For loop som kører mens j er mindre end i
    x = tal[j]; // x bliver tal nummer j i array
    y = tal[j + 1]; // y bliver tal nummer j + 1 i array
    antalSammenligninger += 1;
    if (x > y) {
      // Hvis x er større end y, så bytter de plads
      tal[j] = y;
      tal[j + 1] = x;
    }
  }
  i = i - 1;
}
console.log(
  "Færdig. Der blev foretaget",
  antalSammenligninger,
  "sammenligninger"
);
console.log(tal); // Tallende bliver sorteret efter størrelse.
/* Hvor mange sammenligninger ville der mon blive foretaget, hvis arrayet bestod af n-elementer?
n-1 + (n-1)-1 + (n-2)-1 + ... (n-n)-1
*/
