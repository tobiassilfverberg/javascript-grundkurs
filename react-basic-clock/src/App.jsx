import { useState } from "react"
import Clock from "./components/Clock"
import "./App.css"

const App = () => {
	const [showClock, setShowClock] = useState(false)

	const toggleClock = () => {
		setShowClock(!showClock)
	}

	return (
		<div className="container text-center">
			<button
				onClick={toggleClock}
				id="toggleClock"
				className="btn btn-outline-light"
			>
				{showClock ? "Hide clock" : "Show clock"}
			</button>

			{showClock && (
				<div id="clock-wrapper">
					<Clock />
				</div>
			)}
		</div>
	)
}

export default App
