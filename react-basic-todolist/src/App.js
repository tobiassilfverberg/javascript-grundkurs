import { useEffect, useState } from "react"
import "./App.css"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import AlertInfo from "./components/AlertInfo"

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
						<TodoList
							todos={unfinishedTodos}
							onToggleTodo={toggleTodo}
							onDeleteTodo={deleteTodo}
						/>
					)}
					{unfinishedTodos.length === 0 && (
						<AlertInfo>
							<h2>Yeeehaaaaw!</h2>
							<img
								src="https://c.tenor.com/cBcdBXtqL8UAAAAC/colin-mochrie-whos-awesome.gif"
								className="img-fluid"
								alt="You're awesome!"
							/>
							<p>
								You got <strong>nothing</strong> to do.
							</p>
						</AlertInfo>
					)}

					{finishedTodos.length > 0 && (
						<>
							<h2>Completed todos</h2>
							<TodoList
								todos={finishedTodos}
								onToggleTodo={toggleTodo}
								onDeleteTodo={deleteTodo}
							/>
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
