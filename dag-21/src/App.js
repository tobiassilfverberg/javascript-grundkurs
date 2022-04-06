import { useState } from "react"
import Salary from "./components/Salary"
import "./App.css"

const App = () => {
	const [msg, setMsg] = useState("Hi mom, I'm stateful")
	const [clicks, setClicks] = useState(0)
	const [posts, setPosts] = useState([
		{ title: "React Rocks 🤘🏻!", likes: 1337 },
		{ title: "JSX Rocks Even Moar 🤘🏻!", likes: 42 },
		{ title: "Got State?", likes: 3 },
	])

	const [newPostTitle, setNewPostTitle] = useState("")

	const [showPosts, setShowPosts] = useState(true)

	const addLike = (post) => {
		post.likes++

		setPosts([...posts])
	}

	const deletePost = (clickedPost) => {
		setPosts(posts.filter((post) => post !== clickedPost))
	}

	const handleButtonClick = () => {
		setClicks((prevClicks) => prevClicks + 1)
	}

	const handleFormSubmit = (e) => {
		// stop form from submitting
		e.preventDefault()

		// push a new post to the posts state
		setPosts([...posts, { title: newPostTitle, likes: 0 }])

		// clear newPostTitle state
		setNewPostTitle("")
	}

	return (
		<div className="App container">
			<h1>React Basics</h1>

			<h2>{msg}</h2>

			<p>You have clicked the button {clicks} times.</p>

			<button
				onClick={handleButtonClick}
				className="btn btn-success btn-lg"
			>
				👆🏻 me!
			</button>

			<button
				onClick={() => {
					setMsg("Hi dad!")
				}}
				className="btn btn-warning btn-lg"
			>
				Hi dad!
			</button>

			<hr />

			<Salary />

			<hr />

			<h2>Posts</h2>

			<form onSubmit={handleFormSubmit}>
				<div className="input-group mb-2">
					<input
						type="text"
						class="form-control"
						placeholder="Post title"
						onChange={(e) => setNewPostTitle(e.target.value)}
						value={newPostTitle}
					/>
					<button type="submit" className="btn btn-primary">
						Create post 😃
					</button>
				</div>
			</form>

			<button
				className="btn btn-primary"
				onClick={() => setShowPosts(!showPosts)}
			>
				{showPosts ? "Hide posts" : "Show posts"}
			</button>

			{showPosts && (
				<ul>
					{posts.map((post, index) => (
						<li key={index}>
							{post.title} ({post.likes})
							<button
								className="btn btn-success btn-sm m-1"
								onClick={() => addLike(post)}
							>
								👍
							</button>
							<button
								className="btn btn-danger btn-sm"
								onClick={() => deletePost(post)}
							>
								🚮
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default App
