'use strict';

// The following code creates an array of shooters.
// Every function is meant to output its number. But something is wrong…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    // function shooter() {
    const j = i; // (**)
    let shooter = function () {
      // create a shooter function,
      console.log(j); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.

// Why do all of the shooters show the same value?
// A: Each shooter references the latest state of i in the makeArmy scope.
// This is 10 because 10 terminates the loop. To fix, add a variable local to
// the loop. See (**).
