import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
		//console.log(action.payload.data); // [ post1, post2 ]
		return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}
//17PiegMGoUBG5Zt57u9wPtbNDnfx2rTU9m
//tramsaction number - 746ad4d9889aa43497726f4536a1924a8fbb1c30929c683f6200085c2e8c28c2
