export const toValidTemp = (temp, tempType) => {
	switch (tempType) {
		case 'K':
			return temp + 273;

		case 'F':
			return Math.round(temp * 1.8 + 32);

		default:
			return temp;
	}
};
