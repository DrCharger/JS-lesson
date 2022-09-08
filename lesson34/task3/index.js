const baseUrl = 'https://6319a5136b4c78d91b3fe284.mockapi.io/api/v1/userLogin';

const emailElem = document.querySelector('#email');
const userElem = document.querySelector('input[name="name"]');
const passwordElem = document.querySelector('input[name="password"]');
const buttonElem = document.querySelector('.submit-button');
const inputForm = document.querySelector('.form-input');

function createUser(userData) {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(userData),
	});
}

function getUsersList() {
	return fetch(baseUrl).then((response) => response.json());
}

const formElem = document.querySelector('.login-form');

buttonElem.setAttribute('disabled', true);
buttonElem.disabled = true;

const onFormSubmit = (event) => {
	event.preventDefault();
	const email = emailElem.value;
	const password = passwordElem.value;
	const userName = userElem.value;

	const userData = { email, userName, password };
	console.log(userData);

	createUser(userData)
		.then((response) => getUsersList(response))
		.then(() => {
			const formData = Object.fromEntries(new FormData(formElem));
			alert(JSON.stringify(formData));
			formElem.reset();
		});
};

const vadility = () => {
	buttonElem.disabled = !formElem.reportValidity();
};

formElem.addEventListener('change', vadility);
formElem.addEventListener('submit', onFormSubmit);
