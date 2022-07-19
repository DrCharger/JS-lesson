const arrAverage = (arr) => {
	if (!Array.isArray(arr)) {
		return null;
	}
	return arr.reduce((acc, elem) => {
		return (acc += elem / arr.length);
	}, 0);
};

console.log(arrAverage([2, 5, 6, 3]));
