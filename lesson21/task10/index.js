export const finishForm = () => {
	let input;
	document
		.querySelector('.login-form')
		.prepend((input = document.createElement('input')));
	input.setAttribute('type', 'text');
	input.setAttribute('name', 'login');
	document
		.querySelector('input[name = "password"]')
		.setAttribute('type', 'password');
};
