const checkboxElem = document.querySelector('.task-status');

checkboxElem.addEventListener('change', () => {
	if (checkboxElem.checked) {
		console.log('true');
	} else {
		console.log('false');
	}
});
