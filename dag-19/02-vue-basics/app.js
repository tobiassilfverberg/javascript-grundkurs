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
		}
	},
})

// Mount our Vue app to the element with id #app in the DOM
app.mount("#app")
