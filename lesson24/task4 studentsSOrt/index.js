const students = [
	{
		name: 'Tom',
		birthDate: '01/15/2010',
	},
	{
		name: 'Ben',
		birthDate: '01/17/2008',
	},
	{
		name: 'Sam',
		birthDate: '03/15/2010',
	},
];
const monthName = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'June',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Feb',
];

export const studentsBirthDays = (arr) => {
	const a = arr
		.map((elm) => {
			const month = elm.birthDate.split('/')[0];
			const day = elm.birthDate.split('/')[1];
			const year = elm.birthDate.split('/')[2];
			elm.day = new Date(year, month, day).getDate();
			elm.birthDate = monthName[new Date(year, month, day).getMonth() - 1];
			return elm;
		})
		.sort((a, b) => a.day - b.day);
	console.log(a);
	const obj = {};
	for (let i = 0; i < a.length; i++) {
		// eslint-disable-next-line no-prototype-builtins
		if (!obj.hasOwnProperty(a[i].birthDate)) {
			obj[a[i].birthDate] = [];
			obj[a[i].birthDate].push(a[i].name);
		} else {
			obj[a[i].birthDate].push(a[i].name);
		}
	}
	return obj;
};

studentsBirthDays(students);
