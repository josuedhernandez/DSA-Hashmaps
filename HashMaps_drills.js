"use strict";
const HashMap = require("./hash-maps");

// Create a function called main()
function main() {
  // Inside your main() function, create a hash map called lotr
  var lotr = new HashMap();

  // For your hash map that you have created, set the
  // MAX_LOAD_RATIO = 0.5 and SIZE_RATIO = 3.
  HashMap.SIZE_RATIO = 3;
  HashMap.MAX_LOAD_RATIO = 0.5;

  // Add the following items to your hash map: {"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"},
  // {"Wizard": "Gandalf"}, {"Human": "Aragorn"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"},
  // {"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"},
  // {"Ent": "Treebeard"}
  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");

  // Print your hash map and notice the length and items that are hashed in your hash map.
  // Have you hashed all the items you were asked to?
  console.log(lotr);
  // A: Length is 9 but trying to add 11 items, not all items where hashed.

  // What are the values of Maiar and Hobbit that you have?
  console.log(lotr.get("Maiar"));
  console.log(lotr.get("Hobbit"));
  // Is there a discrepancy? Explain your answer.
  // A: only one value per key using the get method. Part of the problem is the lenght
  // and index issue when setting a key and a value.

  // What is the capacity of your hash table after you have hashed all the above items?
  // Explain your answer.
  // A: Setting the value checks for load ratio. Initial capacity 8 * size ratio of 3
  // equals 24 after addinf values and testing the load ratio.
}

main();

const WhatDoesThisDo = function () {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

WhatDoesThisDo();
// What is the output of the following code? explain your answer.
// A: set is setting the last value, same behavior as the previous example.

// Remove duplicates
function removeDuplicates(string) {
  const hashtable = new HashMap();
  let responseStr = "";
  string.split("").forEach((letter) => {
    try {
      hashtable.get(letter);
    } catch {
      hashtable.set(letter, "");
      responseStr += letter;
    }
  });
  return responseStr;
}

console.log(removeDuplicates("google")); // gole
console.log(removeDuplicates("google all that you think can think of")); // gole athyuinkcf

// TODO: Any permutation a palindrome

// TODO: Anagram grouping

// TODO: Separate Chaining