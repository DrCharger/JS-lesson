export const finishList = () => {
	const eight = document.createElement('li');
	eight.textContent = '8';
	document.querySelector('.list').append(eight);
	const one = document.createElement('li');
	one.textContent = '1';
	document.querySelector('.list').prepend(one);
	const four = document.createElement('li');
	four.textContent = '4';
	document.querySelector('.special').before(four);
	const six = document.createElement('li');
	six.textContent = '6';
	document.querySelector('.special').after(six);
};

finishList();
