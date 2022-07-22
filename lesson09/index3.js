function getKeys(obj) {
	return Object.keys(obj).forEach((num) => console.log(num));
}

// examples
console.log(getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' }));
// prints ===>
// name
// city
// englishLevel
