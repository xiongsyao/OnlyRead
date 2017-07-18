/**
 * Created by Administrator on 2017/7/18.
 */
import fetch from '../config/fetch'
import { baseUrl,api } from '../config/url'


const GET_ABSTRACT = 'GET_ABSTRACT';
const GET_DETAIL = 'GET_DETAIL';

//Action Creator
const recevied = (type, data) => {
	switch (type) {
		case GET_ABSTRACT:
			return {
				type: type,
				payload: data
			};
		case GET_DETAIL:
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
	if(site) {
		if (site === 'jobbole') {
			url = `${baseUrl}${api.jobbole}${page}`
		}
	}
	console.log(`fetch.get url:${url}`);
	return fetch.get(url)
		.then(res => res.data.list)
}