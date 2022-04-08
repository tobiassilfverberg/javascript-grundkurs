import { useEffect, useState } from "react"
import "./App.css"

const App = () => {
	const [time, setTime] = useState(() => {
		return new Date().toLocaleTimeString()
	})

	// This will be executed only once
	useEffect(() => {
		setInterval(() => {
			const now = new Date().toLocaleTimeString()
			setTime(now)
		}, 1000)
	}, [])

	return (
		<div className="container">
			<div className="display-1 text-center">{time}</div>
		</div>
	)
}

export default App
