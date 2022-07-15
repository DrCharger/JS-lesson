function findDivCount(a, b, n) {
	let sum = 0;
	for (; a <= b; a++) {
		if (a % n === 0) {
			sum++;
		}
	}
	return sum;
}
findDivCount(1, 20, 2);
