import { createContext, useState } from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState("light")

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	const values = {
		theme,
		toggleTheme,
	}

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
