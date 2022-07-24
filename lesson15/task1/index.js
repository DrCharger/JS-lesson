// counter

const makeCounter = () => {
	let count = 0;
	return function () {
		// eslint-disable-next-line no-plusplus
		return count++;
	};
};

const counter1 = makeCounter();
const counter2 = makeCounter();
