let result = 0;
export function add(num) {
	return (result += num);
}
export function decrease(num) {
	return (result -= num);
}
export function reset() {
	return (result = 0);
}
export function getMemo() {
	return result;
}
