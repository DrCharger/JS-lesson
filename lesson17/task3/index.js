export const defer = (func, ms) => {
	return function () {
		// eslint-disable-next-line prefer-rest-params
		const a = setTimeout(() => func.apply(this, arguments), ms);
	};
};
const user = {
	name: 'Tom',
	sayHi() {
		console.log(this.name);
	},
};
const deferredHi = defer(user.sayHi, 1000);

deferredHi.call({ name: 'bob' });
