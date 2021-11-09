/**
 * Array methods
 *
 * .sort()
 * .filter() <--
 * .find()
 * .map()
 * .reduce()
 */

const numbers = [2, 1, 45, 27, 10, -8, 8, 13, 37, 69, 28, 4, 93, 16];

// put all numbers >= 25 in new array
/* 
const largeNumbers = [];
numbers.forEach((num) => {
  if (num >= 25) {
    largeNumbers.push(num);
  }
});
 */
/* 
// filter out all numbers >= 25
const largeNumbers = numbers.filter((num) => num >= 25);
console.log("Large numbers:", largeNumbers);

const names = ["Johan", "Tobias", "Bo", "Kjell", "Ida", "Li"];

const longNames = names.filter((name) => name.length > 2);
console.log("Long names:", longNames); 
*/

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
  {
    name: "Plutten",
    points: 20,
  },
  {
    name: "Retard",
    points: 8,
  },
];

// get all student who passed the test (>= 40)
const passed = students.filter((student) => student.points >= 40);
console.log("Students who passed the exam:", passed);
