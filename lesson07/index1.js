const getSpecialNabers = (arr) => arr.filter((num) => num % 3 === 0);

const arr = [
	1, 6, 7, 9, 4, 6, 776, 8, 5, 563, 345, 355, 7, 45, 452, 47, 456, 4,
];

console.log(getSpecialNabers(arr));
