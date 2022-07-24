export function createLogger() {
	const arr = [];

	function warn(text) {
		const obj = {};
		obj.message = text;
		obj.dateTime = new Date();
		obj.type = 'warn';
		return arr.push(obj);
	}
	function error(text) {
		const obj = {};
		obj.message = text;
		obj.dateTime = new Date();
		obj.type = 'error';
		return arr.push(obj);
	}
	function log(text) {
		const obj = {};
		obj.message = text;
		obj.dateTime = new Date();
		obj.type = 'log';
		return arr.push(obj);
	}
	function getRecords(type) {
		if (type === 'log') {
			return arr
				.filter((num) => num.type === 'log')
				.sort((a, b) => b.dateTime - a.dateTime);
		}
		if (type === 'warn') {
			return arr
				.filter((num) => num.type === 'warn')
				.sort((a, b) => b.dateTime - a.dateTime);
		}
		if (type === 'error') {
			return arr
				.filter((num) => num.type === 'error')
				.sort((a, b) => b.dateTime - a.dateTime);
		}
		return arr.sort((a, b) => b.dateTime - a.dateTime);
	}
	return { getRecords, error, warn, log };
}
// examples
const logger1 = createLogger();

logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

// const logger2 = createLogger();
// logger2.warn('Opps, something is happenning');
// console.log(logger2.getRecords('error')); // ===> []
// console.log(logger2.getRecords('warn')); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
// console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

// const logger3 = createLogger();
// console.log(logger3.getRecords('error')); // ===> []
// console.log(logger3.getRecords()); // ===> []
