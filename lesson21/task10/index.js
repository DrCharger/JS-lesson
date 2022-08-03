export const finishForm = () => {
	let input = document.createElement('input');
	document.querySelector('.login-form').prepend(input);
	input.setAttribute('type', 'text');
	input.setAttribute('name', 'login');
	document
		.querySelector('input[name = "password"]')
		.setAttribute('type', 'password');
};

finishForm();
