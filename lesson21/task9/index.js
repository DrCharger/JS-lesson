export const finishList = () => {
	let one = document.createElement('li');
	one.textContent = '1';
	document.querySelector('.list').prepend(one);
	let eight = document.createElement('li');
	eight.textContent = '8';
	document.querySelector('.list').append(eight);
	let four = document.createElement('li');
	four.textContent = '4';
	document.querySelector('.special').before(four);
	let six = document.createElement('li');
	six.textContent = '6';
	document.querySelector('.special').after(six);
};

finishList();
