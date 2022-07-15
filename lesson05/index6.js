function getPrimes(n) {
	for (let a = 2; a <= n; a++) {
		for (let b = 2; b <= a; b++) {
			if (a % b === 0 && b < a) {
				break;
			} else if (b === a) {
				console.log(a);
			}
		}
	}
}
getPrimes(20);
