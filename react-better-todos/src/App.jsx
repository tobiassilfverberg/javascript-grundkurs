import Container from "react-bootstrap/Container"
import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import CreateTodo from "./pages/CreateTodo"
import HomePage from "./pages/HomePage"
import TodoPage from "./pages/TodoPage"
import TodosPage from "./pages/TodosPage"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"

const App = () => {
	return (
		<div id="App">
			<Navigation />

			<Container>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/todos" element={<TodosPage />} />
					<Route path="/todos/:id" element={<TodoPage />} />
					<Route path="/todos/create" element={<CreateTodo />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App
