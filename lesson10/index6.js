const getRandomNumbers = (length, from, to) => {
	if (
		from > to ||
		Math.ceil(to) === Math.ceil(from) ||
		Math.floor(to) === Math.floor(from)
	) {
		return null;
	}

	const min = Math.ceil(from);
	const max = Math.ceil(to);
	let arr = [];
	arr.length = length;

	return arr
		.fill(0)
		.map((num) => (num = Math.floor(Math.random() * (max - min) + min)));
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]

console.log(getRandomNumbers(7, 1.4, 1.9)); // ==> null
console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null
console.log(getRandomNumbers(1, 2.5, 0.9)); // ==> null
