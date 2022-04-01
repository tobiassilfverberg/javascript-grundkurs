/**
 * Vue.js Dad Jokes
 *
 */

// Create our Vue app
const app = Vue.createApp({
	data() {
		return {
			error: false,
			joke: null,
			loading: true,
		}
	},

	mounted() {
		this.getDadJoke()
	},

	methods: {
		async getDadJoke() {
			// set joke to null and loading to true
			this.joke = null
			this.loading = true

			// fetch joke from icanhazdadjoke.com
			try {
				const res = await fetch("https://icanhazdadjoke.com", {
					headers: {
						Accept: "application/json",
					},
				})

				// parse response as json
				const data = await res.json()

				// set loading to false
				this.loading = false

				// set this.joke to be the response's joke-property
				this.joke = data.joke
			} catch (e) {
				// set loading to false
				this.loading = false

				// set error to true
				this.error = true
			}
		},
	},

	computed: {},
})

// Mount our Vue app on the element with id `app` in the DOM
app.mount("#app")
