import { SET_TEMP_TYPE } from './types';

export const setTempType = (data) => (dispatch) => {
	dispatch({
		type: SET_TEMP_TYPE,
		payload: data
	});
};
