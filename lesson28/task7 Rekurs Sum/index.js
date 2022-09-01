let result = 0;
const sum = (initValue) => {
	if (initValue <= 0) {
		return result;
	}
	result += initValue;
	return sum(initValue - 1);
};

sum(4);
