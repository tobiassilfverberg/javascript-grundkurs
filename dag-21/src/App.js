import "./App.css"

function App() {
	let msg = "hi mom"

	const handleButtonClick = () => {
		console.log("You clicked the button, good job")
	}

	return (
		<div className="App">
			<h1>React Basics</h1>

			<h3>{msg}</h3>

			<p>You have clicked the button 0 times</p>

			<button
				onClick={handleButtonClick}
				className="btn btn-success btn-md"
			>
				Click me
			</button>
		</div>
	)
}

export default App
