const cleanTransactionsList = (arr) =>
	arr
		.map((num) => Number(String(num).trim()))
		.filter((num) => !Number.isNaN(num))
		.map((num) => '$'.concat(num.toFixed(2)));

console.log(
	cleanTransactionsList([' 1.9    ', '16.4   ', 17, ' 1 dollar ', '  Privet ']),
);
