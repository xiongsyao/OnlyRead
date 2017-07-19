/**
 * Created by Administrator on 2017/7/18.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Pagination } from 'antd';
import * as actions from '../redux/action'
import AbstractItem from './AbstractItem'
import Loading from './Loading'


class Abstract extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			page: 1
		};
		this.onChangePage = this.onChangePage.bind(this)
	}

	onChangePage (page) {
		console.log(page);
		this.setState({
			page: page,
		});
		this.props.actions.fetchAbstract('jobbole',page)
	}

	componentDidMount() {
		this.props.actions.fetchAbstract('jobbole',this.state.page)
			.then(res => this.setState({isLoading:false}))
	}


	render() {
		let { abstract } = this.props;
		return (
			<div className="left-content-box">
				{ this.state.isLoading ? <Loading/> : ''}
				<div style={{alignSelf:"start"}}>
				<Pagination
					showQuickJumper
					current={this.state.page}
					onChange={this.onChangePage}
					total={100}
					size="small"/>
				</div>
				{ abstract.map(
					(unit,i) => <AbstractItem abstract={unit} key={i}/>) }
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