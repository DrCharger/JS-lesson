const baseUrl = 'https://6319a5136b4c78d91b3fe284.mockapi.io/api/v1/login';

const emailElem = document.querySelector('#email');
const userElem = document.querySelector('input[name="name"]');
const passwordElem = document.querySelector('input[name="password"]');
const buttonElem = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');

function createUser(userData) {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(userData),
	});
}

const validity = () => {
	buttonElem.disabled = !formElem.reportValidity();
};

const onFormSubmit = (event) => {
	event.preventDefault();

	const userData = Object.fromEntries(new FormData(formElem));
	console.log(userData);

	return createUser(userData)
		.then((response) => response.json())
		.then((result) => {
			formElem.reset();
			validity();
			alert(JSON.stringify(result));
		});
};
formElem.addEventListener('input', validity);
formElem.addEventListener('submit', onFormSubmit);
