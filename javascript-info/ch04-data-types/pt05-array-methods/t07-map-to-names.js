'use strict';

// You have an array of user objects, each one has user.name. Write the code
// that converts it into an array of names.
// For instance:

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };
let users = [john, pete, mary];

// let names = /* ... your code */
// alert( names ); // John, Pete, Mary

/** A: Code to convert users into an array of names. */
let names = users.map((x) => x['name']);

console.assert(JSON.stringify(names) === '["John","Pete","Mary"]');
