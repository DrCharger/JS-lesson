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

	tasksList.map((elem, i) => {
		elem.id = idn[i];
		if (!elem.hasOwnProperty('time')) {
			elem.time = new Date();
		}
		return elem;
	});
	const tasksElems = tasksList
		.sort((a, b) => a.done - b.done)
		.sort((a, b) => {
			if (a.done === true && b.done === true) return b.time - a.time;
			if (a.done === false && b.done === false) return b.time - a.time;
		})
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

const addNewTask = () => {
	const tasksList = tasks;
	const inputElem = document.querySelector('.task-input');
	if (inputElem.value === '') {
		return;
	}
	const b = { text: inputElem.value, done: false };
	tasksList.push(b);
	inputElem.value = '';
	listElem.innerHTML = '';
	renderTasks(tasksList);
};
const change = (event) => {
	const a = tasks.find((elem) => elem.id === Number(event.target.dataset.id));
	// eslint-disable-next-line no-unused-expressions
	a.done === false ? (a.done = true) : (a.done = false);
	a.time = new Date();
	listElem.innerHTML = '';
	renderTasks(tasks);
};

btnElem.addEventListener('click', addNewTask);
listElem.addEventListener('click', change);

renderTasks(tasks);
