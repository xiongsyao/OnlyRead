/**
 * Created by Administrator on 2017/7/19.
 */
import React from 'react'
import { Spin,Alert } from 'antd'


const Loading = (props) => {
	return (
			<Spin tip="Loading..." size="large">
				<Alert
					message="你知道吗"
					description="如果太长时间没加载出来，可能是服务器在偷懒..."
					type="info"
				/>
			</Spin>
	)
};

export default Loading;