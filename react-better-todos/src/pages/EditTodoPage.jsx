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
				<button
					type="submit"
					className="btn btn-primary"
					disabled={!newTitle.length}
				>
					Save changes
				</button>
			</div>
		</form>
	)
}

export default EditTodoPage
