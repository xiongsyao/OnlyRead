/**
 * Created by Administrator on 2017/7/18.
 */
import React from 'react';
import { Layout, BackTop } from 'antd';
import MyHeader from "./Header";
import MyFooter from "./Footer";
import MyContent from "./Content";


class MyLayout extends React.Component {
	constructor(props) {
		super(props)
	};

	render() {
		return (
			<Layout style={{minWidth:"980px"}}>
				<MyHeader/>
				<MyContent>
					{this.props.children}
				</MyContent>
				<BackTop/>
				<MyFooter/>
			</Layout>
		)
	}
}

export default MyLayout