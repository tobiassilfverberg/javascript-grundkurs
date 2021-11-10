/**
 * Array methods
 *
 * .sort()
 * .filter()
 * .find() 
 * .map() 
 * .reduce() <--
 */

/**
 * Numbers
 */
 

const simple_numbers = [1, 2, 3, 4];
/* const simple_sum = simple_numbers.reduce( (sum, num) => {
  console.log(`Sum is ${sum} and num is ${num}`);
  return sum + num;
}, 10);
console.log(`Reducer is complete, sum is ${simple_sum}`); */

// const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 5, 33 ];
// const numbers_sum = numbers.reduce((prevValue, num) => prevValue + num, 0);
// console.log(`Reducer is complete, sum is ${numbers_sum}`);

 /**
  * Students
  */
 const students = [
   {
     name: "Johan",
     points: 133,
   },
   {
     name: "Peter",
     points: 3,
   },
   {
     name: "Alicia",
     points: 42,
   },
   {
     name: "Elliot",
     points: 88,
   },
   {
     name: "Maja",
     points: 35,
   },
 ];

// reduce array of students to the total points of all students
 const totalPoints = students.reduce((sum, student) => sum + student.points, 0);
 console.log("Total points for all students:", totalPoints);
 
 /**
  * Products
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
const totalStockValue = products.reduce((sum, product) => 
  sum + (product.in_stock * product.price), 0);
  console.log(`The total stock value is $${totalStockValue}`);