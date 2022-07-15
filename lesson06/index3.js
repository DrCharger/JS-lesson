function getSpecialNumbers(from, to) {
	const newArr = [];
	// eslint-disable-next-line no-plusplus
	for (let index = from; index < to; index++) {
		if (index % 3 === 0) {
			newArr.push(index);
		}
	}
	return newArr;
}

// examples
console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
console.log(getSpecialNumbers(1, 2)); // ==> [ ]
