import { React } from "react"
import AddNewTodoForm from "../components/AddNewTodoForm"
import TodosAPI from "../services/TodosAPI"

const CreateTodo = () => {
	// Create a new todo in the api
	const createTodo = async (newTodo) => {
		await TodosAPI.createTodo(newTodo)
	}

	return (
		<div className="mb-3 mt-5">
			<AddNewTodoForm onAddNewTodo={createTodo} />
		</div>
	)
}

export default CreateTodo
