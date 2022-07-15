function swap(numbers) {
	const [a, ...arr] = numbers;
	const newNumbers = [...arr, a];
	return newNumbers;
}

function swapManual(numbers) {
	let newNumbers = [];
	newNumbers = numbers.slice();
	newNumbers.push(newNumbers.shift());
	return newNumbers;
}

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
