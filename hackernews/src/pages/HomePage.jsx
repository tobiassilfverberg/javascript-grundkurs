import { useContext } from "react"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { ThemeContext } from "../contexts/ThemeContextProvider"

const HomePage = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<>
			<h1>Welcome to Hacker News!</h1>

			<Button variant="primary" as={Link} to="/search">
				Use the Search, you must
			</Button>

			<p>Your theme is: {theme}</p>

			<Button onClick={toggleTheme} variant="success">
				Change theme
			</Button>
		</>
	)
}

export default HomePage
