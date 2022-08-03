export const getSection = (num) => {
	const a = document
		.querySelector(`span[data-number = '${num}']`)
		.closest('.box');
	return a.dataset.section;
};
