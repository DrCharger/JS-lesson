let sum = 0;
// eslint-disable-next-line no-plusplus
for (let index = 1; index <= 1000; index++) {
	sum += index;
}
const n = sum % 1234;
const m = (sum - n) / 1234;

console.log(m < n);
