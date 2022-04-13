import { useEffect, useState } from "react"
import Forecast from "./components/Forecast"
import SearchCity from "./components/SearchCity"
import { getCurrentWeather } from "./services/owmapi"
import "./App.css"

const App = () => {
	const [weather, setWeather] = useState()
	const [location, setLocation] = useState()

	useEffect(() => {
		if (!location) {
			return
		}

		const fetchingData = async () => {
			const data = await getCurrentWeather(location)
			setWeather(data)
		}
		fetchingData()
	}, [location])

	const handleSearch = (city) => {
		setLocation(city)
	}

	return (
		<div id="app" className="container">
			<SearchCity setLocation={handleSearch} />

			{weather && <Forecast weatherData={weather} />}
		</div>
	)
}

export default App
