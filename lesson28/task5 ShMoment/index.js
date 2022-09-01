const getMethodsNames = {
	years: 'getFullYear',
	months: 'getMonth',
	days: 'getDate',
	hours: 'getHours',
	minutes: 'getMinutes',
	seconds: 'getSeconds',
	milliseconds: 'getMilliseconds',
};

const setMethodsNames = {
	years: 'setFullYear',
	months: 'setMonth',
	days: 'setDate',
	hours: 'setHours',
	minutes: 'setMinutes',
	seconds: 'setSeconds',
	milliseconds: 'setMilliseconds',
};

const shmoment = (date) => {
	const copyDate = new Date(date);

	const calc = {
		add(key, value) {
			const addDate = copyDate[getMethodsNames[key]]();
			copyDate[setMethodsNames[key]](addDate + value);
			return this;
		},
		subtract(key, value) {
			const subtractDate = copyDate[getMethodsNames[key]]();
			copyDate[setMethodsNames[key]](subtractDate - value);
			return this;
		},
		result() {
			return copyDate;
		},
	};
	console.log(copyDate);
	console.log(date);
	return calc;
};
const a = shmoment(new Date(2020, 0, 7, 17, 17, 17))
	.add('minutes', 2)
	.subtract('years', 5)
	.result();
console.log(a);
console.log();
