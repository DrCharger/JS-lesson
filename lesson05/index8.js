function sum(from, to) {
	let a = 0;
	for (; from <= to; from++) {
		a += from;
	}
	return a;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
	// hint: you should use sum function inside compareSums
	let first = sum(firstFrom, firstTo);
	let second = sum(secondFrom, secondTo);

	if (first < second) {
		return false;
	} else {
		return true;
	}
}

// examples
sum(5, 10); // ===> 45
sum(11, 11); // ===> 11

compareSums(5, 10, 5, 10); // ===> false
compareSums(5, 15, 3, 5); // ===> true
compareSums(-2, 5, 5, 9); // ===> false
