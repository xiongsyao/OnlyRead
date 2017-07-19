/**
 * Created by Administrator on 2017/7/18.
 */
import React from 'react'
import { Carousel,Switch } from 'antd'


class RightInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			autoplay: true,
		};
		this.changePlay = this.changePlay.bind(this)
	};

	changePlay() {
		this.setState({
			autoplay:!this.state.autoplay
		})
	}

	render() {
		let {autoplay} = this.state;
		return (
			<div className="right-content-box">
				<div className="right-info-box">
					<div className="info-title">
						SOMETHING
					</div>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
					</ul>
				</div>
				<div className="right-info-box">
					<div className="info-title">
						ONE&nbsp;&nbsp;
						<Switch
							defaultChecked={autoplay}
							checkedChildren="on"
							unCheckedChildren="off"
							onChange={this.changePlay}
						/>
					</div>
					<Carousel vertical autoplay={autoplay}>
						<div><h3>1</h3></div>
						<div><h3>2</h3></div>
						<div><h3>3</h3></div>
						<div><h3>4</h3></div>
						<div><h3>5</h3></div>
					</Carousel>
				</div>
			</div>
		)
	}
}


export default RightInfo