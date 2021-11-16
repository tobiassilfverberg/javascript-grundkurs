/**
 * Array cloning
 */

const names = ["Tobbe", "Johan", "Pelle"];
// const clone_fail = names; // copies the *reference* to the array, *NOT* the _content_ of the array

/* 
const new_array = [];
for (let i = 0; i < names.length; i++) {
  console.log("Name:", names[i]);
  new_array.push(names[i]);
}
*/
// const new_array = names.filter((person_name) => true);
const new_array = [...names];

// const popcorn = clone_fail.pop();
// console.log("Name popped:", popcorn);

console.log("names:", names);
console.log("New array:", new_array);
