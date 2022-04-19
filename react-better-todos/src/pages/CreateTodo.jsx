import { React } from "react"
import { useNavigate } from "react-router-dom"
import AddNewTodoForm from "../components/AddNewTodoForm"
import TodosAPI from "../services/TodosAPI"

const CreateTodo = () => {
	const navigate = useNavigate()

	// Create a new todo in the api
	const createTodo = async (newTodo) => {
		await TodosAPI.createTodo(newTodo)
		navigate("../todos")
	}

	return (
		<div className="mb-3 mt-5">
			<AddNewTodoForm onAddNewTodo={createTodo} />
		</div>
	)
}

export default CreateTodo
