/**
 * Created by Administrator on 2017/7/18.
 */
import React from 'react';
import { Layout,Breadcrumb } from 'antd';
import RightInfo from "./RightInfo";

const { Content } = Layout;

class MainBox extends React.Component {
	constructor(props) {
		super(props)
	};

	render() {
		return (
				<Content style={{ padding: '50px 50px', marginTop: "64px"}}>
					<div className="content-box">
						{this.props.children}
						<RightInfo/>
					</div>
				</Content>
		)
	}
}


export default MainBox
