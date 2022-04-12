import { useEffect, useState } from "react"
import "./App.css"
import AddTodo from "./components/AddTodo"
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

	const toggleTodo = (todo) => {
		todo.completed = !todo.completed
		setTodos([...todos])
	}

	const deleteTodo = (clickedTodo) => {
		setTodos(todos.filter((todo) => todo !== clickedTodo))
	}

	const handleAddNewTodo = (newTodo) => {
		setTodos([...todos, newTodo])
	}

	useEffect(() => {
		setUnfinishedTodos(todos.filter((todo) => !todo.completed))
		setFinishedTodos(todos.filter((todo) => todo.completed))
	}, [todos])

	// Our first side-effect
	useEffect(() => {
		// console.log("Hi, im a side-effect")
		document.title = `${finishedTodos.length}/${todos.length} completed`
	}, [finishedTodos, todos])

	// useEffect(() => {
	// 	console.log("This will be executed ONCE")
	// }, [])

	return (
		<div className="App container">
			<h1>React Simple Todos</h1>

			<div className="mb-3">
				<AddTodo onAddNewTodo={handleAddNewTodo} />
			</div>

			{todos.length > 0 && (
				<>
					{unfinishedTodos.length > 0 && (
						<ul className="todolist">
							{unfinishedTodos.map((todo, index) => (
								<TodoListItem
									key={index}
									onTitleClick={toggleTodo}
									onDelete={deleteTodo}
									todo={todo}
								/>
							))}
						</ul>
					)}

					{finishedTodos.length > 0 && (
						<>
							<h2>Completed todos</h2>
							<ul className="todolist">
								{finishedTodos.map((todo, index) => (
									<TodoListItem
										key={index}
										onTitleClick={toggleTodo}
										onDelete={deleteTodo}
										todo={todo}
									/>
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
