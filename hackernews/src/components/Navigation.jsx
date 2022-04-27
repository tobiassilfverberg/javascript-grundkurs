import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link, NavLink } from "react-router-dom"

import { ThemeContext } from "../contexts/ThemeContextProvider"
import { useContext } from "react"

const Navigation = () => {
	const { isDarkTheme, theme, toggleTheme } = useContext(ThemeContext)

	return (
		<Navbar
			bg="dark"
			variant="dark"
			expand="md"
			className="border-bottom border-light"
		>
			<Container>
				<Navbar.Brand as={Link} to="/">
					Hacker News
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/search">
							Search
						</Nav.Link>
						<Button
							onClick={toggleTheme}
							variant="secondary"
						>
							{isDarkTheme() ? "Lightmode" : "Darkmode"}
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
