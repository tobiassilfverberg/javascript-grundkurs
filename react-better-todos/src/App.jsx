import Container from "react-bootstrap/Container"
import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import HomePage from "./components/HomePage"
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
				</Routes>
			</Container>
		</div>
	)
}

export default App
