const createButton = (buttonText) => {
	let btn = document.createElement('button');
	btn.textContent = buttonText;
	return document.querySelector('body').append(btn);
};
