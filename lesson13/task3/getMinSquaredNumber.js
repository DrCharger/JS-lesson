export const getMin = (arr) => {
	if (!Array.isArray(arr) || arr.length === 0) {
		return null;
	}
	const result = arr
		.map((num) => Math.abs(num))
		.reduce((acc, el) => (el < acc ? (acc = el) : (acc = acc)));
	return result * result;
};

console.log(getMin([]));
