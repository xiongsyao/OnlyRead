import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import AppRoute from './router'
import './style.css'


class App extends React.Component {
	render() {
		const url = `/api/jobbole/news/1`
		axios.get(url)
			.then(res => res.data)
			.then(data => console.log(data))
		return (
			<AppRoute/>
		)
	}
}



ReactDOM.render(
	<App/>,
	document.getElementById("box")
);