import { useState, useRef, useEffect } from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import TodosAPI from "../services/TodosAPI"

const EditTodoPage = () => {
	const location = useLocation()
	const data = location.state
	const [newTitle, setNewTitle] = useState(data.title)
	const { id } = useParams()
	const navigate = useNavigate()

	const updateTodo = async (id, update) => {
		const data = JSON.parse(update)
		await TodosAPI.updateTodo(id, data)
	}

	// input reference
	const newTitleRef = useRef()

	// Delete a todo in the api
	const handleDelete = async () => {
		await TodosAPI.deleteTodo(id)

		navigate("/todos")
	}

	const handleSubmit = (e) => {
		// stop form from submitting
		e.preventDefault()

		const data = JSON.stringify({ title: newTitle })

		updateTodo(id, data)

		// clear newTodoTitle state
		setNewTitle("")
		navigate(-1)
	}

	// focus on input field when component is mounted
	useEffect(() => {
		newTitleRef.current.focus()
	}, [])

	return (
		<form className="mt-2" onSubmit={handleSubmit}>
			<div className="input-group">
				<input
					type="text"
					className="form-control"
					placeholder={"Please enter your title"}
					ref={newTitleRef}
					onChange={(e) => setNewTitle(e.target.value)}
					value={newTitle}
				/>
			</div>
			<div className="d-flex justify-content-between mt-2">
				<button
					type="submit"
					className="btn btn-primary"
					disabled={!newTitle.length}
				>
					Save
				</button>
				<button
					type="delete"
					className="btn btn-danger"
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</form>
	)
}

export default EditTodoPage
