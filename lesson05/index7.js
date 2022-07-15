function increaser(a, index) {
	let inc = 1;
	if (a > index) {
		inc = a * index;
		return inc;
	}
	return a;
}
