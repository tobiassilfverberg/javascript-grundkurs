/**
 * Vue.js Basics
 *
 */

// Create our Vue app
const app = Vue.createApp({
	data() {
		return {
			count: 0,

			salary: 10,

			msg: "Hello, Vue!",

			x: 0,
			y: 0,
		}
	},
	methods: {
		increaseSalary(amount = 1) {
			this.salary += amount
		},
		decreaseSalary(amount = 1) {
			if (this.salary - amount < 5) {
				this.salary = 5
				return
			}
			this.salary -= amount
		},
		updateCoords(e) {
			console.log("Move event", e)
			this.x = e.offsetX
			this.y = e.offsetY
		},
	},
})

// Mount our Vue app to the element with id #app in the DOM
app.mount("#app")
