import useFetch from "../hooks/useFetch"
import Button from "react-bootstrap/Button"

const FetchPage = () => {
	const baseURL = "https://api.chucknorris.io/jokes/random"

	const { data, error, loading, fetchData } = useFetch(baseURL)

	return (
		<>
			<h1>Fetch Page</h1>
			{loading && <p>Loading...</p>}

			{error && <p>Error: {error.message}</p>}

			{data && !loading && <p className="display-1">{data.value}</p>}

			<Button disabled={loading} onClick={fetchData}>
				Get new joke
			</Button>
		</>
	)
}

export default FetchPage
