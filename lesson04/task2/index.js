const m = 15;
const n = 40;
let result = 1;

// eslint-disable-next-line no-plusplus
for (let i = m; i <= n; i++) {
	// eslint-disable-next-line no-continue
	if (i % 2 === 0) continue;
	result *= i;
}
console.log(result);
