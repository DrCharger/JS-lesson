function sumOfSquares() {
	return [...arguments].reduce((acc, el) => acc + el * el, 0);
}

console.log(sumOfSquares(1, 2, 3, 4, 5));
