const filterNames = (arr, text) =>
	arr.filter((word) => word.length > 5 && word.includes(text));

console.log(
	filterNames(
		['John', 'Oliviya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'],
		'ya',
	),
);
// word.length >= 5
