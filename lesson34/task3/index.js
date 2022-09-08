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

const validity = () => {
	buttonElem.disabled = formElem.reportValidity() ? false : true;
};

const formElem = document.querySelector('.login-form');
const onFormSubmit = (event) => {
	event.preventDefault();

	const userData = {
		email: emailElem.value,
		userName: passwordElem.value,
		password: userElem.value,
	};
	console.log(userData);

	createUser(userData).then(() => {
		const data = Object.fromEntries(new FormData(formElem));
		alert(data);
		formElem.reset();
		validity();
	});
};

formElem.addEventListener('input', validity);
formElem.addEventListener('submit', onFormSubmit);
