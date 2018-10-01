import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import tempTypeReducer from './tempTypeReducer';

export default combineReducers({
	weather: weatherReducer,
	tempType: tempTypeReducer
});
