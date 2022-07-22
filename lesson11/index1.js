const splitText = (text, len = 10) => {
	if (typeof text !== 'string') {
		return null;
	}
	const arr = [];
	let count = 0;
	while (true) {
		const cut = text.substr(count, len);
		if (cut.length === 0) break;

		arr.push(cut[0].toUpperCase() + cut.slice(1));
		count += len;
	}
	return arr.join('\n');
};

console.log(splitText(1, 4));
