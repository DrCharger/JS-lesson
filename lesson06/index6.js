function squareArray(arr) {
	let newArr = [];
	if (!Array.isArray(arr)) {
		return null;
	}
	// eslint-disable-next-line no-restricted-syntax
	newArr = arr.slice();
	for (let index = 1; index < newArr.length; index++) {
		newArr[index] *= newArr[index];
	}
	return newArr;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
