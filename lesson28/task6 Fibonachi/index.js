const a = [0, 1];
const maxFibonacci = (initValue) => {
	if (initValue <= 0) {
		return;
	}
	if (a[a.length - 1] >= initValue) {
		return a.reverse().find((elem) => elem <= initValue);
	}

	a.push(a[a.length - 1] + a[a.length - 2]);

	return maxFibonacci(initValue);
};

maxFibonacci(15);
