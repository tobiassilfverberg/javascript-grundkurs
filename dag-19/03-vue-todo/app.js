/**
 * Workshop - Simple TODO list
 */

const app = Vue.createApp({
	data() {
		return {
			newTodoTitle: "",

			todos: [
				{ title: "Play LoL", completed: true },
				{ title: "Drink Redbull", completed: false },
				{ title: "Make coffee", completed: false },
			],
		}
	},

	methods: {
		addTodo() {
			if (!this.newTodoIsValid) {
				return
			}
			this.todos.push({ title: this.newTodoTitle, completed: false })

			this.newTodoTitle = ""
		},

		changeStatus(todo) {
			todo.completed = !todo.completed
		},

		deleteTodo(todo) {
			this.todos = this.todos.filter((t) => t !== todo)
		},
	},

	computed: {
		finishedTodos() {
			return this.todos.filter((todo) => todo.completed)
		},

		newTodoIsValid() {
			return this.newTodoTitle.length >= 3
		},

		unfinishedTodos() {
			return this.todos.filter((todo) => !todo.completed)
		},

		unfinishedTodosCount() {
			return this.todos.reduce((previousValue, todo) => {
				if (todo.completed) {
					return previousValue
				}

				return previousValue + 1
			}, 0)
		},
	},
}).mount("#app")
