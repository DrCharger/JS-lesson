function uniqueCount(array) {
	if (!Array.isArray(array)) {
		return null;
	}
	let count = 0;
	const newArr = [];
	for (let index = 0; index < array.length; index++) {
		newArr.push(array[index]);
		count++;
		for (let index2 = 0; index2 < newArr.length - 1; index2++) {
			if (array[index] === newArr[index2]) {
				newArr.pop();
				count--;
			}
		}
	}

	return count;
}

uniqueCount([2, 5, 6, 8, 5, 4, 1, 5, 8, 4]);
