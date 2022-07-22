const reverseString = (string) => {
	if (typeof string !== 'string') {
		return null;
	}
	return string.split('').reverse().join('');
};

console.log(reverseString('Hello, world!'));
