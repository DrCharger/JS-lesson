const sum = (arr) => {
	if (!Array.isArray(arr)) {
		return null;
	}
	return arr.reduce((acc, item) => (acc += item));
};
console.log(sum([1, 6, 7, 9, 4, 6]));
