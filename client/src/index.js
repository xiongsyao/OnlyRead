import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"

import Home from './views/Home'


class App extends React.Component {
	render() {
		const url = `/api/jobbole/news/1`
		axios.get(url)
			.then(res => res.data)
			.then(data => console.log(data))
		return (
			<div style={{background:"red"}}>
				<Home/>
			</div>
		)
	}
}



ReactDOM.render(
	<App/>,
	document.getElementById("box")
);