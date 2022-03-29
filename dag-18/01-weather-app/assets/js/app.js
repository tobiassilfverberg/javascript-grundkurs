/**
 * ☔️.
 *
 */

const renderCurrentWeather = async (data) => {
	const icons = data.weather.map((icon) => icon.icon)

	if (!data) {
		document.querySelector(
			"#forecast"
		).innerHTML = `<h3> The city you requested does not exist. Try again</h3>`
	} else {
		document.querySelector("#forecast").innerHTML = `
	<img src="assets/images/forecast-banner.png" class="card-img-top"/>
		<div class="card-body">
			<ul class="city card-title conditions" id="location">
				<li id="city">
					<h5>
						<span id="city"> ${data.name}, </span> 
						<span id="country"> ${data.sys.country} </span> 
					</h5>
				</li>
				<li id="icon">
					<img src="http://openweathermap.org/img/wn/${icons}@2x.png"/> 
				</li>
				<li id="temperature" class="temp">${data.main.temp} &deg;C</li>
				<li id="humidity" class="humidity">${data.main.humidity}&percnt;     humidity</li>
				<li class="wind" id="windspeed">${data.wind.speed} m/s</li>
			</ul>
		</div>
	`
	}
}

document.querySelector("#search-form").addEventListener("submit", async (e) => {
	e.preventDefault()

	document.querySelector("#loadingspinner").classList.remove("hide")

	const query = document.querySelector("#query").value

	if (query.length < 3) {
		alert("Plese enter at least 3 chars")
		return
	}

	console.log("Searching for city:", query)

	const data = await getCurrentWeather(query)

	setTimeout(() => {
		renderCurrentWeather(data)
		// document.querySelector("#forecast").classList.add("hide")
		// document.querySelector("#loadingspinner").classList.remove("hide")
	}, 500) 

	document.querySelector("#forecast").classList.remove("hide")
	document.querySelector("#loadingspinner").classList.add("hide")
})
