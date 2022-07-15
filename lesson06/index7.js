const checkSum = (arr) => {
	let sum = 0;
	if (!Array.isArray(arr)) {
		return null;
	}
	// eslint-disable-next-line no-restricted-syntax
	for (const num of arr) {
		sum += num;
	}
	if (sum > 100) {
		return true;
	}
	return false;
};

// examples
console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true
