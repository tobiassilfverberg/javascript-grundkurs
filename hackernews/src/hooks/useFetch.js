import { useState, useEffect, useCallback } from "react"
import axios from "axios"

const useFetch = (initialUrl = null) => {
	const [url, setUrl] = useState(initialUrl)
	const [data, setData] = useState()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const fetchData = useCallback(async () => {
		setLoading(true)
		try {
			const res = await axios.get(url)
			await new Promise((r) => setTimeout(r, 1000))
			setData(res.data)
			setError(null)
		} catch (err) {
			setError(err)
		} finally {
			setLoading(false)
		}
	}, [url])

	useEffect(() => {
		if (!url) {
			return
		}
		setLoading(true)

		fetchData()
		setLoading(false)
	}, [fetchData, url])

	return {
		data,
		error,
		loading,
		fetchData,
	}
}

export default useFetch
