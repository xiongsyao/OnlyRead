/**
 * Created by Administrator on 2017/7/18.
 */
import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const { Header } = Layout;

class MyHeader extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Header style={{ flexWrap:"nowrap",position: 'fixed', width: '100%', }}>
				<div className="logo">
					<Icon type="book"/>&nbsp;OnlyRead
				</div>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					style={{lineHeight: '64px',minWidth:"1024px"}}
				>
					<Menu.Item key="1"><Icon type="api"/>伯乐在线</Menu.Item>
					<Menu.Item key="2"><Icon type="bulb"/>nav 2</Menu.Item>
					<Menu.Item key="3">nav 3</Menu.Item>
					<Menu.Item key="4"><Icon type="api"/>伯乐在线</Menu.Item>
					<Menu.Item key="5"><Icon type="api"/>伯乐在线</Menu.Item>
					<Menu.Item key="6"><Icon type="api"/>伯乐在线</Menu.Item>
				</Menu>
			</Header>
		)
	}
}


export default MyHeader

