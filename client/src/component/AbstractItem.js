/**
 * Created by Administrator on 2017/7/18.
 */
import React from 'react'


class AbstractItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {abstract} = this.props;
		return (
			<div>
				{abstract.title}
				{abstract.time}
				{abstract.id}
				<hr/>
			</div>
		)
	}
}

export default AbstractItem