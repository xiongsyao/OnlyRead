/**
 * Created by Administrator on 2017/7/18.
 */
const Reducer = (state = {},action) => {
	console.log(action.type)
	switch (action.type) {
		case "GET_ABSTRACT":
			console.log(action.payload)
			return {
				abstract:action.payload
			};
		default:
			return state
	}
}


export default Reducer