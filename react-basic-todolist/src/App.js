import { useEffect, useState } from "react"
import "./App.css"
import TodoListItem from "./components/TodoListItem"

const App = () => {
	const [todos, setTodos] = useState([
		{ title: "Make coffee", completed: true },
		{ title: "Drink coffee", completed: false },
		{ title: "Drink MOAR coffee", completed: false },
		{ title: "Drink ALL THE coffee", completed: false },
	])

	const [unfinishedTodos, setUnfinishedTodos] = useState([])
	const [finishedTodos, setFinishedTodos] = useState([])

	// input state
	const [newTodoTitle, setNewTodoTitle] = useState("")

	const toggleTodo = (todo) => {
		todo.completed = !todo.completed
		setTodos([...todos])
	}

	const deleteTodo = (clickedTodo) => {
		setTodos(todos.filter((todo) => todo !== clickedTodo))
	}

	const handleFormSubmit = (e) => {
		// stop form from submitting
		e.preventDefault()

		// push a new todo to the todos state
		const newTodo = { title: newTodoTitle, completed: false }
		setTodos([...todos, newTodo])

		// clear newTodoTitle state
		setNewTodoTitle("")
	}

	useEffect(() => {
		setUnfinishedTodos(todos.filter((todo) => !todo.completed))
		setFinishedTodos(todos.filter((todo) => todo.completed))
	}, [todos])

	// Our first side-effect
	useEffect(() => {
		console.log("Hi, im a side-effect")
		document.title = `${finishedTodos.length}/${todos.length} completed`
	}, [finishedTodos, todos])

	useEffect(() => {
		console.log("This will be executed ONCE")
	}, [])

	return (
		<div className="App container">
			<h1>React Simple Todos</h1>

			<div className="mb-3">
				<form onSubmit={handleFormSubmit}>
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							placeholder="Todo title"
							onChange={(e) => setNewTodoTitle(e.target.value)}
							value={newTodoTitle}
						/>
						<button type="submit" className="btn btn-primary">
							Create
						</button>
					</div>
				</form>
			</div>

			{todos.length > 0 && (
				<>
					{unfinishedTodos.length > 0 && (
						<ul className="todolist">
							{unfinishedTodos.map((todo, index) => (
								<TodoListItem todo={todo} key={index} />
							))}
						</ul>
					)}

					{finishedTodos.length > 0 && (
						<>
							<h2>Completed todos</h2>
							<ul className="todolist">
								{finishedTodos.map((todo, index) => (
									<TodoListItem todo={todo} key={index} />
								))}
							</ul> 
						</>
					)}

					<p className="status">
						{finishedTodos.length} av {todos.length} todos
						avklarade.
					</p>
				</>
			)}
		</div>
	)
}

export default App
