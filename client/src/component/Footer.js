/**
 * Created by Administrator on 2017/7/17.
 */
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

class MyFooter extends React.Component {
	render() {
		return(
			<Footer style={{ textAlign: 'center' }}>
				Copyright © 2017
				&nbsp;
				OnlyRead Admin 版权所有
			</Footer>
		)
	}
}

export default MyFooter