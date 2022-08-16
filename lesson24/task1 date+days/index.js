const arr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

const dayOfWeek = (date, days) => {
	const day = new Date(date).getDate();
	const newDay = new Date(date).setDate(day + days);

	return arr[new Date(newDay).getDay()];
};

console.log(dayOfWeek(new Date(), 24));
