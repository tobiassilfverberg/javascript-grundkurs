import { useEffect, useState } from "react"
import ListGroup from "react-bootstrap/ListGroup"
import { Link } from "react-router-dom"
import TodosAPI from "../services/TodosAPI"

const TodosPage = () => {
	const [todos, setTodos] = useState([])

	// Get todos from api
	const getTodos = async () => {
		const data = await TodosAPI.getTodos()
		const sortedTodos = data
			.sort((a, b) => a.title.localeCompare(b.title))
			.sort((a, b) => a.completed - b.completed)
		setTodos(sortedTodos)
	}

	// Get todos from api when component is first mounted
	useEffect(() => {
		getTodos()
	}, [])

	return (
		<>
			<h1 className="mt-2">Todos</h1>

			{todos.length > 0 && (
				<ListGroup className="todolist">
					{todos.map((todo) => (
						<ListGroup.Item
							action
							key={todo.id}
							className="d-flex justify-content-between"
						>
							<Link
								to={`/todos/${todo.id}`}
								className={todo.completed ? "done" : "notDone"}
							>
								{" "}
								{todo.title}{" "}
							</Link>
						</ListGroup.Item>
					))}
				</ListGroup>
			)}

			{todos.length === 0 && <p className="status">No todos 🥳!</p>}
		</>
	)
}

export default TodosPage
