import { reverseArray, getAdults, withdraw } from './function';

it('is not array', () => {
	const result = reverseArray('2 + 5');
	expect(result).toEqual(null);
});

it('func is OK', () => {
	const result = reverseArray([1, 2, 3]);
	expect(result).toEqual([3, 2, 1]);
});

it('Array is empty', () => {
	const result = reverseArray([]);
	expect(result).toEqual(null);
});

it('Adults is here', () => {
	const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
	expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('is not array', () => {
	const result = getAdults({ Ann: 56, Andrey: 7 });
	expect(result).toEqual({ Ann: 56 });
});

it('is not object', () => {
	const result = getAdults('Ann');
	expect(result).toEqual(null);
});

it('balances is good for buying', () => {
	const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
	expect(result).toEqual(37);
});
it('not enought money', () => {
	const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
	expect(result).toEqual(-1);
});
it('no clients or balances', () => {
	const result = withdraw([], [1400, 87, -6], 'User', 10);
	expect(result).toEqual(null);
});
