/**
 * Open Weather Map API
 */

// const API_KEY = 
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getCurrentWeather = async (query) => {
	// get weather for query from OpenWeatherMap API
	const response = await fetch(
		`${BASE_URL}/weather?q=${query}&units=metric&appid=${API_KEY}`
	)

	// convert response from JSON
	const data = await response.json()

	if (data.cod == 404) {
		return false
	} else {
		return data
	}
}
