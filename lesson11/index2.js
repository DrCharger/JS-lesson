const sortContacts = (arr, isAsc = true) => {
	if (!Array.isArray(arr)) {
		return null;
	}
	return isAsc === true
		? arr.sort((a, b) => a.name.localeCompare(b.name))
		: arr.sort((a, b) => b.name.localeCompare(a.name));
};
const customers = [
	{
		name: 'William',
		phoneNumber: '777-77-77',
	},
	{
		name: 'Tom',
		phoneNumber: '111-11-11',
	},
	{
		name: 'Dan',
		phoneNumber: '555-55-55',
	},
];

console.log(sortContacts(customers, true));
