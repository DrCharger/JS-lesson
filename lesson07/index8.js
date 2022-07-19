const cloneArr = (arr) => {
	if (!Array.isArray(arr)) {
		return null;
	}
	return arr.slice();
};
