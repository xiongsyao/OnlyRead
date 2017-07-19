import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import AppRoute from './router'
import store from './redux/store'
import './style.css'



ReactDOM.render(
	<Provider store={store}>
		<AppRoute/>
	</Provider>,
	document.getElementById("box")
);