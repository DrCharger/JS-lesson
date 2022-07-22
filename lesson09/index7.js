const getTotalRevenue = (transactions) =>
	transactions
		.map((value) => Object.entries(value))
		.flat(1)
		.filter((num) => num.includes('amount'))
		.map((num) => num[1])
		.reduce((acc, num) => (acc += num));

// examples
const dayTransactions = [
	{ userId: 22, amount: 60, operation: 'sell' },
	{ userId: 22, amount: 160, operation: 'buy' },
	{ userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);
