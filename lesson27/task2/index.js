const counterValueElem = document.querySelector('.cont__value');

const onCounterChange = (e) => {
	const isButton = e.target.classList.contains('cont__btn');

	if (!isButton) {
		return;
	}
	const action = e.target.dataset.task;
	const oldValue = Number(counterValueElem.textContent);
	const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

	localStorage.setItem('counterValue', newValue);

	counterValueElem.textContent = newValue;
};

document.querySelector('.container').addEventListener('click', onCounterChange);

const onStorageChange = (e) => {
	counterValueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
	counterValueElem.textContent = localStorage.getItem('counterValue');
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
