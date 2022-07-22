const splitString = (text, len = 10) => {
	if (typeof text !== 'string') {
		return null;
	}
	const arr = [];
	let count = 0;
	while (true) {
		const cut = text.substr(count, len);
		if (cut.length === 0) break;
		if (cut.length < len) {
			arr.push(cut + '.'.repeat(len - cut.length));
			break;
		}
		arr.push(cut);
		count += len;
	}
	return arr;
};

console.log(splitString('abcd efgh', 4));
