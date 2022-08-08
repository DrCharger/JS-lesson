const checkboxElem = document.querySelector('.task-status');

checkboxElem.addEventListener('change', (event) =>
	event.target.checked ? console.log(true) : console.log(false),
);
