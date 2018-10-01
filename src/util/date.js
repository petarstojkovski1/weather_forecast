import _ from 'lodash';

export const isToday = (date) => {
	var today = new Date();
	return (
		_.isEqual(date.getDate(), today.getDate()) &&
		_.isEqual(date.getMonth(), today.getMonth()) &&
		_.isEqual(date.getFullYear(), today.getFullYear())
	);
};
