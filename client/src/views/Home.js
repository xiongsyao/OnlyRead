/**
 * Created by Administrator on 2017/7/17.
 */
import React from 'react'
import Navbar from '../component/Navbar'


class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbar/>
				{this.props.children}
			</div>
		)
	}
}

export default Home