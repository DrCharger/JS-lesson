const buildObject = (keysList, valuesList) => {
	const result = {};
	keysList.forEach((key, i) => (result[key] = valuesList[i]));
	return result;
};
// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
