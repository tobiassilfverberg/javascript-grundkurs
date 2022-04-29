import { useEffect, useState } from "react"

const useLocalStorage = (key, defaultValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		// get value from localStorage and parse it from JSON
		const value = window.localStorage.getItem(key)

		if (value) {
			return JSON.parse(value)
		} else {
			return defaultValue
		}
	})

	useEffect(() => {
		// save stored value in localStorage
		window.localStorage.setItem(key, JSON.stringify(storedValue))
	}, [key, storedValue])

	return [storedValue, setStoredValue]
}

export default useLocalStorage
