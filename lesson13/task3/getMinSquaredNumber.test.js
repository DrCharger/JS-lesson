import { getMin } from './getMinSquaredNumber';

it('Array is empty', () => {
	const result = getMin([]);
	expect(result).toEqual(null);
});
it('Array is not Array', () => {
	const result = getMin('Dimon');
	expect(result).toEqual(null);
});
it('should get min squared number', () => {
	const result = getMin([-777, 3, -2, 6, 45, -20]);
	expect(result).toEqual(4);
});
