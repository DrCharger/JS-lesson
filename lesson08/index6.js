/* eslint-disable no-restricted-syntax */

const pickProps = (obj, props) => {
	const object = {};
	for (const key in obj) {
		props.forEach((num) =>
			num === key ? (object[key] = obj[key]) : object[key],
		);
	}
	return object;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
