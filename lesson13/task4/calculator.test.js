import { calc } from './calculator';

it('plus func is good', () => {
	const result = calc('2 + 5');
	expect(result).toEqual('2 + 5 = 7');
});
it('minus func is good', () => {
	const result = calc('6 - 5');
	expect(result).toEqual('6 - 5 = 1');
});
it('multiply func is good', () => {
	const result = calc('2 * 5');
	expect(result).toEqual('2 * 5 = 10');
});
it('devide func is good', () => {
	const result = calc('10 / 5');
	expect(result).toEqual('10 / 5 = 2');
});
it("It's not string", () => {
	const result = calc(2 + 5);
	expect(result).toEqual(null);
});
