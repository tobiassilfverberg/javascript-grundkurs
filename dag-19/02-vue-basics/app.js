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

			showBox: true,

			x: 0,
			y: 0,
		}
	},
	methods: {
		getSalaryClass() {
			return this.salary >= 20 ? "good-salary" : "bad-salary"
		},

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

		toggleBox() {
			this.showBox = !this.showBox
		},

		updateCoords(e) {
			this.x = e.offsetX
			this.y = e.offsetY
		},
	},
})

// Mount our Vue app to the element with id #app in the DOM
app.mount("#app")
