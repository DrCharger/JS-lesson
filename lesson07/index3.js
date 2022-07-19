// const flatArray = (arr) => arr.reduce((acc, elem) => acc.concat(elem), []);
const flatArray = (arr) => arr.flat().sort((a, b) => a - b);
const arr = [
	1,
	[6, 7, 9],
	4,
	[6, 776, 8, 5],
	563,
	345,
	355,
	7,
	[45, 452, 47],
	456,
	4,
];

console.log(flatArray(arr));
