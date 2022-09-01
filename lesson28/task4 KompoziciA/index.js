const compose =
	(...funcs) =>
	(value) => {
		return funcs.reduce((acc, func) => func(acc), value);
	};

const add3 = (value) => value + 3;
const mult = (value) => value * 3;
const div4 = (value) => value / 2;

const a = compose(add3, mult, div4);

console.log(a(5));
