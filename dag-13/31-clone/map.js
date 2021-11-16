/**
 * Array methods
 *
 * .sort()
 * .filter()
 * .find() 
 * .map() <--
 * .reduce()
 */

/* 
// numbers
const numbers = [2, 21, 1, 15, 27, 10, 18, 8];

// multiply all numbers by 2
const doubleNumbers = numbers.map(num => num * 2);
*/

/* // products
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

const skus = products.map(product => product.sku);
const product_names = products.map(product => product.name);
console.log("SKUs:", skus);

// create sale products 
const sale_products = products.map(product => {
    return {
        sku: product.sku,
        name: product.name,
        in_stock: product.in_stock,
        price: product.price / 2,
    };
}) */

// school friends
const friends = [
    { name: 'John', grade: 2, year: 3, sex: 'M' },
    { name: 'Sarah', grade: 3, year: 2, sex: 'F' },
    { name: 'Bob', grade: 3, year: 5, sex: 'M' },
    // { grade: 1, year: 42, sex: 'Alien' },
    { name: 'Johnny', grade: 2, year: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, year: 1, sex: 'M' },
    { name: 'Paula', grade: 4, year: 5, sex: 'F' },
    { name: 'Donald', grade: 5, year: 5, sex: 'M' },
    { name: 'Jennifer', grade: 3, year: 3, sex: 'F' },
    { name: 'Courtney', grade: 3, year: 1, sex: 'F' },
    { name: 'Jane', grade: 4, year: 3, sex: 'F '}
];

// USE ONLY THE NEW ARRAY METHODS (sort/filter/find/map)

// 1. get an array of the names of all friends in year 3
const friendsName = friends
    .filter((friend) => friend.year === 3)
    .map(friend => friend.name);
console.log("Friends in year 3:", friendsName);

// 2. get an array of the names of all male friends in year 5
const maleFriends = friends
    .filter((friend) => (friend.year === 5 && friend.sex === 'M'))
    .map(friend => friend.name);
console.log("Male friends in year 5:", maleFriends);