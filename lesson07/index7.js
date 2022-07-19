// const flatArray = (arr) => arr.reduce((acc, elem) => acc.concat(elem), []);
const increaseEvenEl = (arr, delta) => {
	if (!Array.isArray(arr)) {
		return null;
	}
	return arr.map((num) => num % 2 === 0 ? (num += delta) : num);
};

console.log(increaseEvenEl([1, 6, 7, 9, 4, 6], 20));
