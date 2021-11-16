/**
 * Array methods
 *
 * .sort()
 * .filter()
 * .find() <--
 * .map()
 * .reduce()
 */

// numbers
// const numbers = [2, 21, 1, 15, 27, 10, -8, 8, 13, 37, 69, 28, 4, 93, 16];

/* 
let firstLargeNum;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 25) {
    firstLargeNum = numbers[i];
    break;
  }
} 
*/

/* 
const numbers = [2, 21, 1, 15, 27, 10, -8, 8, 13, 37, 69, 28, 4, 93, 16];

const firstLargeNum = numbers.find((num) => num >= 25);
console.log(firstLargeNum); 
*/

const products = [
  {
    sku: "CORR-BWL",
    name: "Corrosive bowl",
    in_stock: 321,
    price: 0.99,
  },
  {
    sku: "CTN-SPCE",
    name: "Cotton spice rack",
    in_stock: 2,
    price: 149.99,
  },
  {
    sku: "GOOD-COOKIES",
    name: "Inside-out Oreo cookies",
    in_stock: 18,
    price: 2.49,
  },
  {
    sku: "BACK-BREAKER",
    name: "The uncomfortable broom",
    in_stock: 1,
    price: 28.65,
  },
];

const nomNomProduct = products.find(
  (product) => product.sku === "GOOD-COOKIES"
);

if (nomNomProduct) {
  console.log("YAY FOUND COOKIES!");
} else {
  console.log("SAD COOKIE MONSTER");
}
