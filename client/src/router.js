/**
 * Created by Administrator on 2017/7/18.
 */
import React from "react";
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom'

import MyLayout from './component/Layout'
import Abstract from "./component/Abstract";


const AppRoute = () => (
	<Router>
		<Route path="/" component={(props) => (
			<MyLayout {...props}>
				<Route path="/site:?">
					<Abstract/>
				</Route>
			</MyLayout>
		)}>
		</Route>
	</Router>
)

export default AppRoute