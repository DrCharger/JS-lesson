const includes = (arr, num) => {
	for (let index = 0; index < arr.length; index++) {
		if (num !== arr[index]) continue;
		if (num === arr[index]) {
			return true;
		}
	}
	return false;
};

// examples

includes([1, 4, 8, 3], 5); // ==> false
