import React, { useEffect, useState } from "react"

const Clock = () => {
	const [time, setTime] = useState(() => {
		return new Date().toLocaleTimeString()
	})

	useEffect(() => {
		setInterval(() => {
			const now = new Date().toLocaleTimeString()
			setTime(now)
		}, 1000)
	}, [])

	return <div className="display-1 text-center">{time}</div>
}

export default Clock
