const tasks = [
	{ text: 'Buy milk', done: false },
	{ text: 'Pick up Tom from airport', done: false },
	{ text: 'Visit party', done: false },
	{ text: 'Visit doctor', done: true },
	{ text: 'Buy meat', done: true },
];

const generatorNum = (from, to) => {
	const result = [];
	for (let i = from; i <= to; i++) {
		result.push(i);
	}
	return result;
};

const listElem = document.querySelector('.list');
const btnElem = document.querySelector('.create-task-btn');

const renderTasks = (tasksList) => {
	const idn = generatorNum(1, tasksList.length);
	tasksList.map((elem, i) => (elem.id = idn[i]));
	const tasksElems = tasksList
		.sort((a, b) => a.done - b.done)
		.map(({ text, done, id }) => {
			const listItemElem = document.createElement('li');
			listItemElem.classList.add('list__item');
			const checkbox = document.createElement('input');
			checkbox.setAttribute('type', 'checkbox');
			checkbox.setAttribute('data-id', id);
			checkbox.checked = done;
			checkbox.classList.add('list__item-checkbox');
			if (done) {
				listItemElem.classList.add('list__item_done');
			}
			listItemElem.append(checkbox, text);

			return listItemElem;
		});

	listElem.append(...tasksElems);
};

const addNewTask = (tasksList) => {
	const inputElem = document.querySelector('.task-input');
	if (inputElem.value === '') {
		return;
	}
	const b = {};
	b.text = inputElem.value;
	b.done = false;
	tasksList.push(b);
	inputElem.value = '';
	listElem.innerHTML = '';
	renderTasks(tasksList);
};
const change = (tasksList, idNum) => {
	tasksList
		.filter((elem) => elem.id === Number(idNum))
		// eslint-disable-next-line no-return-assign
		.map((elem) =>
			elem.done === false ? (elem.done = true) : (elem.done = false),
		);
	listElem.innerHTML = '';
	renderTasks(tasksList);
};

btnElem.addEventListener('click', () => addNewTask(tasks));
listElem.addEventListener('click', (event) =>
	change(tasks, event.target.dataset.id),
);

renderTasks(tasks);
