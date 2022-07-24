export function createCalculator() {
	let result = 0;
	function add(num) {
		return (result += num);
	}
	function decrease(num) {
		return (result -= num);
	}
	function reset() {
		return (result = 0);
	}
	function getMemo() {
		return result;
	}
	return { add, decrease, reset, getMemo };
}
