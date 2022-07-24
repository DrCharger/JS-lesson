import { createCalculator } from './index.js';

it('add is ok', () => {
	const result = createCalculator();
	expect(result.add(3)).toEqual(3);
});
it('decrease is ok', () => {
	const result = createCalculator();
	expect(result.decrease(5)).toEqual(-5);
});
it('reset is ok', () => {
	const result = createCalculator();
	result.add(5);
	result.decrease(7);
	expect(result.reset()).toEqual(0);
});
it('getMemo is ok', () => {
	const result = createCalculator();
	result.add(5);
	result.decrease(7);
	expect(result.getMemo()).toEqual(-2);
});
