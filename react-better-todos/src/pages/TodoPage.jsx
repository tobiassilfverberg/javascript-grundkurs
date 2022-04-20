import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import { useParams } from "react-router-dom"
import TodosAPI from "../services/TodosAPI"
import { Link } from "react-router-dom"

const TodoPage = () => {
	const [todo, setTodo] = useState()
	const { id } = useParams()

	const getTodo = async (id) => {
		const data = await TodosAPI.getTodo(id)
		setTodo(data)
	}

	// Toggle the completed status of a todo in the api
	const toggleTodo = async () => {
		await TodosAPI.updateTodo(id, {
			completed: !todo.completed,
		})
		getTodo(id)
	}

	useEffect(() => {
		getTodo(id)
	}, [id])

	if (!todo) {
		return <p>Loading....</p>
	}

	return (
		<div>
			<h3 className="mt-2"> {todo.title} </h3>

			<p>
				<strong>Status:</strong>{" "}
				{todo.completed ? "Completed" : "Not completed"}{" "}
			</p>

			<Button variant="success" onClick={toggleTodo}>
				{" "}
				Toggle{" "}
			</Button>
			<Button
				variant="warning"
				as={Link}
				to="./EditTodoPage"
				state={todo}
			>
				Edit
			</Button>
		</div>
	)
}

export default TodoPage
