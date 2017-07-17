/**
 * Created by Administrator on 2017/7/17.
 */
import React from 'react';
import {
	Row,
	Col,
	Menu,
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	Checkbox,
	Modal
} from 'antd';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
						<Menu mode="horizontal" theme="dark">
							<Menu.Item key="jobbole"><Icon type="appstore"/>伯乐在线</Menu.Item>
							<Menu.Item key="V2EX"><Icon type="appstore-o"/>伯乐在线</Menu.Item>
							<Menu.Item key="3"><Icon type="appstore"/>伯乐在线</Menu.Item>
							<Menu.Item key="4"><Icon type="appstore-o"/>伯乐在线</Menu.Item>
							<Menu.Item key="5"><Icon type="appstore"/>伯乐在线</Menu.Item>
						</Menu>
			</header>
		)
	}
}


export default Navbar