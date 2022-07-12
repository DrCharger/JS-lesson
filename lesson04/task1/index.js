let sum = 0;
const n = 150;
let i = 1;
while (i <= n) {
	sum += i;
	// eslint-disable-next-line no-plusplus
	i++;
}
console.log('Result:', sum);
