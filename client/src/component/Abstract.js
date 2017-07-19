/**
 * Created by Administrator on 2017/7/18.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/action'
import AbstractItem from './AbstractItem'


class Abstract extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			page: 1
		}
	}

	componentDidMount() {
		this.props.actions.fetchAbstract('jobbole',this.state.page)
			.then(this.setState({isLoading:false}))
	}


	render() {
		return (
			<div className="left-content-box">
				{this.props.abstract.map(
					(unit,i) => <AbstractItem abstract={unit} key={i}/>)}
				{this.state.isLoading ? '加载中' : ''}
			</div>
		)
	}
}

const mapStateToProps = state => {
	let abstract = state.abstract;
	if(abstract) {
		return {
			abstract: abstract
		}
	}
	return {abstract:[{}]}
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions,dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Abstract)