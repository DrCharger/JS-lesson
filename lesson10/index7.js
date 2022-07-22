// eslint-disable-next-line prettier/prettier
const superRound = (num, prec) => [
	Math.floor(num * ('1e' + prec)) / ('1e' + prec),
	Math.trunc(num * ('1e' + prec)) / ('1e' + prec),
	Math.ceil(num * ('1e' + prec)) / ('1e' + prec),
	Math.round(num * ('1e' + prec)) / ('1e' + prec),
	+num.toFixed(prec),
];

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
