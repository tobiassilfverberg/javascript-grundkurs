/**
 * Array methods
 *
 * .sort() <--
 * .filter()
 * .find()
 * .map()
 * .reduce()
 */

/* 
// names
const names = ["Johan", "Tobias", "Pelle", "Daniel", "Anders"];
console.log("names in chaos:", names);

// sort array alphabetically
names.sort();
console.log("Names in proper order:", names);

// reverse order
names.reverse();
console.log("Names in reverse order:", names);
 */

// const numbers = [2, 1, 45, 27, 10, -8, 8, 13, 37];
// console.log("Numbers in chaos:", numbers);

// sort numbers
// numbers.sort((a, b) => {
//return a - b; //DanDev solution
/* // if a is less than b (i.e. a should be sorted BEFORE b)
  if (a < b) {
    return -1;
  }

  // if a is greater than b (i.e. a should be sorted AFTER b)
  if (a > b) {
    return 1;
  }

  // a must be equal to b (keep original order)
  return 0; */

// SHORTEST POSSIBLE WAY
// numbers.sort((a, b) => a - b);
// });
// console.log("Numbers in proper order:", numbers);

const students = [
  {
    name: "Tobbe",
    points: 50,
  },
  {
    name: "danDev",
    points: 47,
  },
  {
    name: "adi",
    points: 45,
  },
];

students.sort((a, b) => {
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return -1;
  }
  if (a.name.toUpperCase() > b.name.toUpperCase()) {
    return 1;
  }
  return 0;
});
console.log(students);
