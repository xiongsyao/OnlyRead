/**
 * Created by Administrator on 2017/7/18.
 */
import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

import MyLayout from "./component/Layout";
import Abstract from "./component/Abstract";
import Article from "./component/Article"


const AppRoute = () => (
	<Router>
		<Route path="/" component={(props) => (
			<MyLayout {...props}>
				<Switch>
					<Route path="/s/:site">
						<Abstract/>
					</Route>
					<Route path="/p/:id">
						<Article/>
					</Route>
					<Route path="/">
						<Abstract/>
					</Route>
				</Switch>
			</MyLayout>
		)}>
		</Route>
	</Router>
)

export default AppRoute