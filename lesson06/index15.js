function removeDuplicates(array) {
	if (!Array.isArray(array)) {
		return null;
	}
	const newArr = [array[0]];
	for (let index = 1; index < array.length; index++) {
		newArr.push(array[index]);
		for (let index2 = 0; index2 < newArr.length - 1; index2++) {
			if (array[index] === newArr[index2]) {
				newArr.pop();
			}
		}
	}

	return newArr;
}
removeDuplicates([2, 5, 6, 8, 5, 4, 1, 5, 8, 4]);
