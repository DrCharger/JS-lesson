const getAdults = (obj) =>
	Object.entries(obj)
		.filter((el) => el[1] >= 18)
		.map((name) => name[0]);

console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
