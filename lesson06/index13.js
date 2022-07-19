const getSubArray = (arr, numberOfElements) => {
	let newArr = [];
	for (let index = 0; index < arr.length; index++) {
		if (index < numberOfElements) {
			newArr.push(arr[index]);
		}
	}
	return newArr;
};
getSubArray([2, 5, 6, 8, 11, 9, 4, 1, 5, 8, 4], 4);
