const getTotalPrice = (arr) =>
	'$'.concat(arr.reduce((acc, el) => Math.floor((acc += el) * 100) / 100));

const num = [
	1.345345, 5.346346346, 6.347468, 7.53654645, 8.45645645, 76.45645645,
];

console.log(getTotalPrice(num));
