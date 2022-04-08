import { useState } from "react"
import Clock from "./components/Clock"
import Timer from "./components/Timer"
import "./App.css"

const App = () => {
	
	return (
		<div className="container text-center">
			
			{
				<button
					onClick={startTimer}
					id="startTimer"
					className="btn btn-outline-light"
				>
					{runTimer ? "Stop timer" : "Start timer"}
				</button>
			}

			<div id="timer-wrapper">
				<Timer />
			</div>
		</div>
	)
}

export default App
