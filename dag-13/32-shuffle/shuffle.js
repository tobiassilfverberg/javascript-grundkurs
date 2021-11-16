/**
 * Array Shuffling
 *
 */

const numbers = [1, 2, 3, 5, 7, 8, 10, 14, 17, 18];
// const names = ["Tobbe", "DanDev", "Adi", "Johan", "Chikage", "Master Yi"];
// console.log("Names before shuffle:", names);
console.log("numbers before shuffle:", numbers);

/* 
numbers.sort(() => 0.5 - Math.random());
console.log("shuffled numbers:", numbers);
 */

// Fisher-Yates algorithm
/*
https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
*/
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
shuffleArray(numbers);
console.log("numbers after shuffle:", numbers);
