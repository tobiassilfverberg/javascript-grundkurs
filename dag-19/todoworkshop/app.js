/**
 * Workshop - Simple TODO list
 */

const app = Vue.createApp({
	data() {
		return {
			newTodoTitle: "",

			todos: [],
		}
	},
	methods: {
		addTodo() {
			this.todos.push({ title: this.newTodoTitle, completed: false })
		},

		changeStatus(todo) {
			// console.log(e.target)
			todo.completed = !todo.completed
			// e.target.completed = !completed
		},
	},
}).mount("#app")
