export const squaredNumbers = () => {
	const a = Array.from(document.querySelectorAll('.number'));
	console.log(a);
	a.map((num) =>
		num.setAttribute(
			'data-squared-number',
			num.dataset.number * num.dataset.number,
		),
	);
};
