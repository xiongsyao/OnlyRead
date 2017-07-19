/**
 * Created by Administrator on 2017/7/18.
 */
import React from 'react';
import { Layout, BackTop } from 'antd';
import MyHeader from "./Header";
import MyFooter from "./Footer";
import MainBox from "./MainBox";


class MyLayout extends React.Component {
	constructor(props) {
		super(props)
	};

	render() {
		return (
			<Layout style={{minWidth:"980px"}}>
				<MyHeader/>
				<MainBox>
					{this.props.children}
				</MainBox>
				<BackTop/>
				<MyFooter/>
			</Layout>
		)
	}
}

export default MyLayout