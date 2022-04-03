/**
 * Array methods cheat sheet
 */

// Array to use
const items = [
	{ name: "Bike", price: 100 },
	{ name: "TV", price: 200 },
	{ name: "Album", price: 10 },
	{ name: "Book", price: 5 },
	{ name: "Phone", price: 500 },
	{ name: "Computer", price: 1000 },
	{ name: "Keyboard", price: 25 },
]

/**
 * Filter - filter out all items in array with price under or equal to 100
 */

// const filteredItem = items.filter((item) => {
// 	return item <= 100
// })

/**
 * Map - convert all items into a new array with only on key
 */

// const itemNames = items.map((item) => {
// 	return item.name
// })

/**
 * Find - find a single object in the array
 */

// const foundItem = items.find((item) => {
// 	return item.name === "Book"
// })

/**
 * forEach - do something for every object in the array
 */

// items.forEach((item) => {
//     console.log(item.name)
// })

/**
 * Some - check if the evaluation is true for ANY of the objects in the array
 */

// const hasInexpensiveItems = items.some((item) => {
// 	return item.price <= 100
// })

/**
 * Every - check if the evaluation is true for ALL of the objects in the array
 */

// const filteredItem = items.some((item) => {
// 	return item <= 100
// })

/**
 * Reduce - "add everything up together"
 */

// const totalPrice = items.reduce((currentTotal, item) => {
// 	return item.price + currentTotal
// }, 0)

/**
 * Includes - check if the array includes what every you pass in the parameters
 */

// const includesTwo = items.include(2)
