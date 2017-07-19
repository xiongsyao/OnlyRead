/**
 * Created by Administrator on 2017/7/18.
 */
import fetch from '../config/fetch'
import { baseUrl,api } from '../config/url'


const GET_ABSTRACT = 'GET_ABSTRACT';
const GET_CONTENT = 'GET_CONTENT';


//Action Creator
const recevied = (type, data) => {
	switch (type) {
		case GET_ABSTRACT:
			return {
				type: type,
				payload: data
			};
		case GET_CONTENT:
			return {
				type: type,
				payload: data
			};
		default:
			return {}
	}
};


export const fetchAbstract = (site,page=1) => dispatch => {
	let url = '';
	switch (site) {
		case("jobbole"):
			url = `${baseUrl}${api.jobbole}${page}`
			break;
		default:
			url = ``
	}
	console.log(`fetch.get url:${url}`);
	return fetch.get(url)
		.then(res => res.data.data)
		.then(data => dispatch(recevied(GET_ABSTRACT, data)))
};

export const fetchContent = (site,id) => dispatch => {
	let url = '';
	switch (site) {
		case ("jobbole"):
			url = `${baseUrl}${api.jobboleContent}${id}`
			break;
		default:
			url = ''
	}
	return fetch.get(url)
		.then(res => res.data.data)
		.then(data => dispatch(recevied(GET_CONTENT, data)))
};