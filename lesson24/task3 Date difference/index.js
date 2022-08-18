export const getDiff = (startDate, endDate) => {
	const a = new Date(startDate).getDate();
	const b = new Date(endDate).getDate();
	let diff = new Date();
	if (new Date(startDate) > new Date(endDate)) {
		diff = new Date(startDate) - new Date(endDate);
	} else {
		diff = new Date(endDate) - new Date(startDate);
	}
	const days = Math.floor(diff / (60 * 60 * 24 * 1000));
	const hours = Math.floor(diff / (60 * 60 * 1000) - days * 24);
	const minutes = Math.floor(diff / (60 * 1000) - (days * 24 + hours) * 60);
	const seconds = Math.floor(
		diff / 1000 - (days * 24 * 60 + hours * 60 + minutes) * 60,
	);
	return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(
	getDiff(new Date(2020, 2, 10, 13, 42, 15), new Date(2021, 1, 20, 9, 48, 16)),
);
