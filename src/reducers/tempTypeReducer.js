import { SET_TEMP_TYPE } from '../actions/types';

const initialState = {
	tempType: 'C'
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_TEMP_TYPE:
			return {
				...state,
				tempType: action.payload
			};

		default:
			return state;
	}
}
