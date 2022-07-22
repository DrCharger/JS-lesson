export const reverseArray = (arr) => {
	if (!Array.isArray(arr) || arr.length === 0) {
		return null;
	}
	return arr.slice().reverse();
};

const arr = [
	1, 6, 7, 9, 4, 6, 776, 8, 5, 563, 345, 355, 7, 45, 452, 47, 456, 4,
];

console.log(reverseArray(arr));

export const getAdults = (obj) => {
	if (typeof obj !== 'object') {
		return null;
	}
	const newObj = {};
	for (const key in obj) {
		obj[key] >= 18 ? (newObj[key] = obj[key]) : newObj[key];
	}
	return newObj;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults('Ann')); // ==> { Ann: 56 }

export const withdraw = (clients, balances, client, amount) => {
	if (clients.length === 0 || balances.length === 0) {
		return null;
	}
	const newIndex = clients.indexOf(client);
	return balances[newIndex] >= amount ? balances[newIndex] - amount : -1;
};
// input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

// output
// 37
// и массив balances должен быть [1400, 37, -6]

// example 2:

// input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

// output
// -1
// и массив balances должен быть [1400, 87, -6]
