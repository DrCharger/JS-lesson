function getSum(arr) {
	let sum = 0;
	if (!Array.isArray(arr)) {
		return null;
	}
	// eslint-disable-next-line no-restricted-syntax
	for (const num of arr) {
		sum += num;
	}
	return sum;
}

// examples
console.log(getSum([1, 10, -10, 4])); // ==> 5
console.log(getSum([1])); // ==> 1
console.log(getSum([-8, 8])); // ==> 0
console.log(getSum(10, 12, 14)); // ==> null
