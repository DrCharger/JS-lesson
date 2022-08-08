const checkboxElem = document.querySelector('.task-status');

checkboxElem.addEventListener('change', () =>
	checkboxElem.checked ? console.log('true') : console.log('false'),
);
