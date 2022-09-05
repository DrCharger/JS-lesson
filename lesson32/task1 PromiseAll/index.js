const getSum = (numbers) =>
	numbers
		.filter((value) => !isNaN(value))
		.reduce((acc, el) => acc + Number(el), 0);

const asyncSum = (...asyncNumbers) =>
	Promise.all(asyncNumbers).then((value) => getSum(value));

const num1 = 10;
const num2 = 20;
const num3 = 30;
const num4 = 40;
const num5 = 50;

asyncSum(num1, num2, num3, num4, num5).then((num) => console.log(num));
