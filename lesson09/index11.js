const getCustomersList = (obj) => {
	Object.entries({ ...obj });
};
const customers = {
	'customer-id-1': {
		name: 'William',
		age: 54,
	},
	'customer-id-2': {
		name: 'Tom',
		age: 17,
	},
	'customer-id-3': {
		name: 'Dan',
		age: 34,
	},
};
console.log(getCustomersList(customers));
[{1}, {2}, {3}];
