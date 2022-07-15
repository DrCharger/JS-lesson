function checker(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}
	let maxArr = 0;
	let minArr = arr[0];

	for (let index = 0; index < arr.length; index++) {
		if (arr[index] >= maxArr) {
			maxArr = arr[index];
		}
		if (arr[index] <= minArr) {
			minArr = arr[index];
		}
	}
	const sum = minArr + maxArr;
	if (sum > 1000) {
		return true;
	}
	return false;
}

console.log(checker([200, 500, 600, 800, 1100, 900, 400, 100, 500, 800, 400]));
