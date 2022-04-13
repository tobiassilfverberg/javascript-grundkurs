import React, { useState } from "react"

const SearchCity = ({ setLocation }) => {
	const [city, setCity] = useState('')

	const submitCity = (e) => {
		e.preventDefault()

		setLocation(city)
	}

	return (
		<div id="search-wrapper">
			<form id="search-form" onSubmit={submitCity}>
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						placeholder="Enter city to search for"
						aria-label="City"
						aria-details="Search for city to show current weather for."
						onChange={(e) => setCity(e.target.value)}
						value={city}
					/>
					<button type="submit" className="btn btn-success">
						🔍
					</button>
				</div>
			</form>
		</div>
	)
}

export default SearchCity
