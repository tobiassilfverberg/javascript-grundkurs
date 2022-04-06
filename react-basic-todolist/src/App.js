import { useState } from "react"
import "./App.css"

function App() {
	const [todos, setTodos] = useState([
		{ title: "Drink Coffee", completed: false },
		{ title: "Drink RedBull", completed: false },
		{ title: "Learn React", completed: true },
	])

	const [newTodoTitle, setNewTodoTitle] = useState("")

	const changeStatus = (clickedTodo) => {
		clickedTodo.completed = !clickedTodo.completed

		setTodos([...todos])
	}

	const deleteTodo = (clickedTodo) => {
		setTodos(todos.filter((todo) => todo !== clickedTodo))
	}

	const finishedTodos = () => {
		return todos.filter((todo) => todo.completed)
	}

	const unfinishedTodos = () => {
		return todos.filter((todo) => !todo.completed)
	}

	const handleFormSubmit = (e) => {
		// stop form from submitting
		e.preventDefault()

		// push a new todo to the todos state
		setTodos([...todos, { title: newTodoTitle, completed: false }])

		// clear newTodoTitle state
		setNewTodoTitle("")
	}

	const unfinishedTodosCount = () => {
		return todos.reduce((previousValue, todo) => {
			if (todo.completed) {
				return previousValue
			}

			return previousValue + 1
		}, 0)
	}

	return (
		<div className="App container">
			<h1>Todos</h1>

			<form onSubmit={handleFormSubmit}>
				<div className="input-group mb-2">
					<input
						type="text"
						className="form-control"
						placeholder="Post todo title"
						onChange={(e) => setNewTodoTitle(e.target.value)}
						value={newTodoTitle}
					/>
					<button type="submit" className="btn btn-primary">
						Create todo 😃
					</button>
				</div>
			</form>

			{todos.length > 0 && (
				<>
					<h2>Unfinished todos</h2>

					<ul>
						{unfinishedTodos().map((todo, index) => (
							<li key={index}>
								<span
									onClick={() => changeStatus(todo)}
									className={
										todo.completed
											? "text-decoration-line-through text-success"
											: "text-decoration-none"
									}
								>
									{todo.title}
								</span>
								<button
									className="btn btn-danger btn-sm m-1"
									onClick={() => deleteTodo(todo)}
								>
									🚮
								</button>
							</li>
						))}
					</ul>

					<h2>Finished todos</h2>

					<ul>
						{finishedTodos().map((todo, index) => (
							<li key={index}>
								<span
									onClick={() => changeStatus(todo)}
									className={
										todo.completed
											? "text-decoration-line-through text-success"
											: "text-decoration-none"
									}
								>
									{todo.title}
								</span>
								<button
									className="btn btn-danger btn-sm m-1"
									onClick={() => deleteTodo(todo)}
								>
									🚮
								</button>
							</li>
						))}
					</ul>
					<p className="text-small muted">
						You have {unfinishedTodosCount()} unfinished todos left
					</p>
				</>
			)}
		</div>
	)
}

export default App
