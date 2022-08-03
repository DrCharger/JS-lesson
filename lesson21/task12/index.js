export const squaredNumbers = () => {
	const a = Array.from(document.querySelectorAll('.number'));
	// .setAttribute('data-squared', null);
	console.log(a);
	a.map((num) =>
		num.setAttribute('data-squared', num.dataset.number * num.dataset.number),
	);
};
