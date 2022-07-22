const countOccurrences = (text, str) => {
	if (str === '') {
		return null;
	}
	let count = 0;
	let cut = text;
	while (cut.length > str.length) {
		console.log(cut);
		if (cut.includes(str)) {
			count++;
			console.log(cut.indexOf(str));
			cut = cut.substr(cut.indexOf(str) + 1, text.length);
		} else break;
	}
	return count;
};
let a =
	'This example shows how to populate an array, setting all elements to a specific value. The end parameter does not have to be specified';
console.log(countOccurrences(a, 'array'));
