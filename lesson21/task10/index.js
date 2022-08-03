export const finishForm = () => {
	const a = document.querySelector('.login-form');
	const input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('name', 'login');
	a.prepend(input);
	document
		.querySelector('input[name = "password"]')
		.setAttribute('type', 'password');
};

finishForm();
