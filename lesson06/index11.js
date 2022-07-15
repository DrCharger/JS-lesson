/* eslint-disable no-restricted-syntax */
function sortAsc(array) {
	if (!Array.isArray(array)) {
		return null;
	}
	const cloneArr = array.slice();
	const newArr = [];
	for (const num of array) {
		let minIndex = 0;
		let minArr = cloneArr[0];
		for (let index = 0; index < cloneArr.length; index++) {
			if (cloneArr[index] <= minArr) {
				minIndex = index;
				minArr = cloneArr[index];
			}
		}
		newArr.push(cloneArr[minIndex]);
		cloneArr.splice([minIndex], 1);
	}
	console.log(newArr);
	return newArr;
}

function sortDesc(array) {
	if (!Array.isArray(array)) {
		return null;
	}
	const cloneArr = array.slice();
	const newArr = [];
	for (const num of array) {
		let maxIndex = 0;
		let maxArr = cloneArr[0];
		for (let index = 0; index < cloneArr.length; index++) {
			if (cloneArr[index] >= maxArr) {
				maxIndex = index;
				maxArr = cloneArr[index];
			}
		}
		newArr.push(cloneArr[maxIndex]);
		cloneArr.splice([maxIndex], 1);
	}
	console.log(newArr);
	return newArr;
}

sortAsc([2, 5, 6, 8, 11, 9, 4, 1, 5, 8, 4]);
sortDesc([2, 5, 6, 8, 11, 9, 4, 1, 5, 8, 4]);
